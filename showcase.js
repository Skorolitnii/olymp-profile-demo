const tabList = document.querySelector('.versions')
const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'))
const animationOptions = Array.from(document.querySelectorAll('[data-shop-animation]'))
const panel = document.querySelector('#version-preview')
const profileFrame = panel.querySelector('iframe')
const mobileLink = panel.querySelector('.preview__mobile')
const profileUrl = new URL(mobileLink.href)
const profileOrigin = new URL(profileFrame.src).origin
const requested = new URLSearchParams(location.search)
let activeVersion = 'v1'
let activeAnimation = requested.get('animation') === 'chips' ? 'chips' : 'cart'

function syncPreview() {
  profileFrame.contentWindow?.postMessage({
    type: 'olymp:profile-selection',
    version: activeVersion,
    animation: activeAnimation,
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
    if (activeAnimation === 'cart') url.searchParams.delete('animation')
    else url.searchParams.set('animation', activeAnimation)
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

function updateAnimationOptions() {
  for (const option of animationOptions) {
    option.setAttribute('aria-pressed', String(option.dataset.shopAnimation === activeAnimation))
  }
}

for (const tab of tabs) tab.addEventListener('click', () => selectVersion(tab))
for (const option of animationOptions) {
  option.addEventListener('click', () => {
    activeAnimation = option.dataset.shopAnimation
    updateAnimationOptions()
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

updateAnimationOptions()
selectVersion(tabs.find((tab) => tab.dataset.version === requested.get('version')) || tabs[0])
