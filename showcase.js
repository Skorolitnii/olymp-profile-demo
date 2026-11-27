const tabList = document.querySelector('.versions')
const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'))
const sizeOptions = Array.from(document.querySelectorAll('[data-card-size]'))
const animationOptions = Array.from(document.querySelectorAll('[data-shop-animation]'))
const levelSelect = document.querySelector('#loyalty-level')
const panel = document.querySelector('#version-preview')
const profileFrame = panel.querySelector('iframe')
const mobileLink = panel.querySelector('.preview__mobile')
const profileUrl = new URL(mobileLink.href)
const profileOrigin = new URL(profileFrame.src).origin
const requested = new URLSearchParams(location.search)
const requestedLevel = requested.get('level')
if (Array.from(levelSelect.options).some((option) => option.value === requestedLevel)) {
  levelSelect.value = requestedLevel
}
let activeVersion = 'v1'
let activeSize = requested.get('size') === 'lg' ? 'lg' : 'md'
const requestedAnimation = requested.get('animation')
let activeAnimation = animationOptions.some((option) => option.dataset.shopAnimation === requestedAnimation)
  ? requestedAnimation
  : 'cart'

function syncPreview() {
  profileFrame.contentWindow?.postMessage({
    type: 'olymp:profile-selection',
    version: activeVersion,
    size: activeSize,
    animation: activeAnimation,
    level: levelSelect.value,
  }, profileOrigin)
}

window.addEventListener('message', (event) => {
  if (event.origin === profileOrigin && event.source === profileFrame.contentWindow && event.data?.type === 'olymp:profile-ready') {
    syncPreview()
  }
})

function updatePreview() {
  const pageUrl = new URL(location.href)
  for (const url of [pageUrl, profileUrl]) {
    if (activeVersion === 'v1') url.searchParams.delete('version')
    else url.searchParams.set('version', activeVersion)
    if (activeSize === 'md') url.searchParams.delete('size')
    else url.searchParams.set('size', activeSize)
    if (activeAnimation === 'cart') url.searchParams.delete('animation')
    else url.searchParams.set('animation', activeAnimation)
    if (levelSelect.value === '1') url.searchParams.delete('level')
    else url.searchParams.set('level', levelSelect.value)
  }
  mobileLink.href = profileUrl.href
  syncPreview()

  if (pageUrl.href !== location.href) {
    try {
      history.replaceState(null, '', pageUrl)
    } catch (error) {
      if (error.name !== 'SecurityError') throw error
    }
  }
}

function selectVersion(tab, focus = false) {
  activeVersion = tab.dataset.version
  for (const item of tabs) {
    const selected = item === tab
    item.setAttribute('aria-selected', String(selected))
    item.tabIndex = selected ? 0 : -1
  }
  panel.setAttribute('aria-labelledby', tab.id)
  if (focus) tab.focus()
  updatePreview()
}

function updatePressedOptions(options, dataKey, value) {
  for (const option of options) {
    option.setAttribute('aria-pressed', String(option.dataset[dataKey] === value))
  }
}

for (const tab of tabs) tab.addEventListener('click', () => selectVersion(tab))
levelSelect.addEventListener('change', updatePreview)
for (const option of sizeOptions) {
  option.addEventListener('click', () => {
    activeSize = option.dataset.cardSize
    updatePressedOptions(sizeOptions, 'cardSize', activeSize)
    updatePreview()
  })
}
for (const option of animationOptions) {
  option.addEventListener('click', () => {
    activeAnimation = option.dataset.shopAnimation
    updatePressedOptions(animationOptions, 'shopAnimation', activeAnimation)
    updatePreview()
  })
}

tabList.addEventListener('keydown', (event) => {
  const index = tabs.indexOf(event.target)
  if (index === -1) return

  const next = {
    ArrowLeft: (index + tabs.length - 1) % tabs.length,
    ArrowRight: (index + 1) % tabs.length,
    Home: 0,
    End: tabs.length - 1,
  }[event.key]
  if (next === undefined) return

  event.preventDefault()
  selectVersion(tabs[next], true)
})

updatePressedOptions(sizeOptions, 'cardSize', activeSize)
updatePressedOptions(animationOptions, 'shopAnimation', activeAnimation)
selectVersion(tabs.find((tab) => tab.dataset.version === requested.get('version')) || tabs[0])
