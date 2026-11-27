import { unref as _unref, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = {
  id: "profile-page",
  class: "loyalty-page",
  "data-theme": "blue"
}
const _hoisted_2 = { class: "loyalty-page__body" }

import { onMounted, onUnmounted, ref } from 'vue'
import LoyaltyWidget from "../components/LoyaltyWidget.vue.js?rev=lg-artwork";
import ProfileBalance from "../components/ProfileBalance.vue.js";
import ProfileMenu from "../components/ProfileMenu.vue.js";
import ProfileNavbar from "../components/ProfileNavbar.vue.js";


export default {
  __name: 'LoyaltyPage',
  props: {
  version: { type: String, default: 'v1' },
  cardSize: { type: String, default: 'md' },
  shopAnimation: { type: String, default: 'cart' },
  links: { type: Object, default: () => ({}) },
  navLinks: { type: Object, default: () => ({}) },
},
  setup(__props) {

const props = __props

const version = ['v1', 'v1.2', 'v2', 'v2.2'].includes(props.version) ? props.version : 'v1'
const header = ref(null)
let range = 0
let profileStart = 0
let scrollFrame = 0
let headerObserver
let profile
let profileSurface
let disappearing
let reduceMotion

function updateHeader() {
  scrollFrame = 0
  const distance = Math.max(0, Math.min(window.scrollY, range))
  const shift = Math.max(0, distance - profileStart)
  const progress = range ? distance / range : 0
  const surface = profileStart ? Math.min(1, distance / profileStart) : 0

  profile.style.translate = `0 ${shift}px`
  if (profileSurface) profileSurface.style.opacity = surface
  for (const { element, fadeRate, movesUp } of disappearing) {
    element.style.opacity = Math.max(0, 1 - progress * fadeRate)
    if (movesUp) {
      element.style.translate = reduceMotion.matches ? '' : `0 calc(-${progress} * var(--gap-xl))`
    }
  }
  header.value.toggleAttribute('data-collapsed', progress === 1)
}

function scheduleHeader() {
  if (!scrollFrame) {
    scrollFrame = window.requestAnimationFrame(updateHeader)
  }
}

function measureHeader() {
  // The negative inset keeps one profile row visible after the header has scrolled away.
  range = header.value.offsetHeight - profile.offsetHeight
  profileStart = profile.offsetTop
  header.value.style.top = `${-range}px`
  scheduleHeader()
}

onMounted(() => {
  profile = header.value.querySelector('.loyalty-widget__expanded, .loyalty-widget__profile')
  profileSurface = header.value.querySelector('.loyalty-widget__profile-surface')
  disappearing = [
    { element: header.value.querySelector('.loyalty-widget__program'), fadeRate: 3 },
    { element: header.value.querySelector('.loyalty-widget_wide .loyalty-widget__scene'), fadeRate: 3 },
    { element: header.value.querySelector('.loyalty-widget__menu'), fadeRate: 1.65, movesUp: true },
    { element: header.value.querySelector('.loyalty-widget__hint'), fadeRate: 1.15, movesUp: true },
  ].filter(({ element }) => element)
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.addEventListener('change', scheduleHeader)
  headerObserver = new ResizeObserver(measureHeader)
  headerObserver.observe(header.value)
  measureHeader()
  window.addEventListener('scroll', scheduleHeader, { passive: true })
})

onUnmounted(() => {
  headerObserver.disconnect()
  reduceMotion.removeEventListener('change', scheduleHeader)
  window.removeEventListener('scroll', scheduleHeader)
  window.cancelAnimationFrame(scrollFrame)
})

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("header", {
      ref_key: "header",
      ref: header,
      class: "loyalty-page__header",
      "data-ds-custom": "loyalty-scroll"
    }, [
      _createVNode(LoyaltyWidget, {
        version: _unref(version),
        "card-size": props.cardSize,
        "shop-animation": props.shopAnimation,
        "program-url": props.links.loyalty,
        "quests-url": props.links.quests,
        "shop-url": props.links.bonusShop
      }, null, 8 /* PROPS */, ["version", "card-size", "shop-animation", "program-url", "quests-url", "shop-url"])
    ], 512 /* NEED_PATCH */),
    _createElementVNode("main", _hoisted_2, [
      _createVNode(ProfileBalance, {
        links: props.links
      }, null, 8 /* PROPS */, ["links"]),
      _createVNode(ProfileMenu, {
        links: props.links
      }, null, 8 /* PROPS */, ["links"])
    ]),
    _createVNode(ProfileNavbar, {
      links: props.navLinks
    }, null, 8 /* PROPS */, ["links"])
  ]))
}
}

}