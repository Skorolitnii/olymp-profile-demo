const tabList = document.querySelector('.versions')
const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'))
const panel = document.querySelector('#version-preview')
const screen = panel.querySelector('iframe')
const mobileLink = panel.querySelector('.preview__mobile')
const profileUrl = new URL(screen.getAttribute('src'), location.href)

function selectVersion(tab, focus = false) {
  const version = tab.dataset.version
  for (const item of tabs) {
    const selected = item === tab
    item.setAttribute('aria-selected', String(selected))
    item.tabIndex = selected ? 0 : -1
  }
  panel.setAttribute('aria-labelledby', tab.id)
  if (focus) tab.focus()

  const pageUrl = new URL(location.href)
  if (version === 'v1') {
    pageUrl.searchParams.delete('version')
    profileUrl.searchParams.delete('version')
  } else {
    pageUrl.searchParams.set('version', version)
    profileUrl.searchParams.set('version', version)
  }
  if (pageUrl.href !== location.href) history.replaceState(null, '', pageUrl)
  mobileLink.href = profileUrl.href
  if (screen.src !== profileUrl.href) screen.src = profileUrl.href
}

for (const tab of tabs) tab.addEventListener('click', () => selectVersion(tab))

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

const requestedVersion = new URLSearchParams(location.search).get('version')
selectVersion(tabs.find((tab) => tab.dataset.version === requestedVersion) || tabs[0])
