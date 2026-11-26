import { unref as _unref, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createVNode as _createVNode } from "vue"

const _hoisted_1 = ["aria-label"]
const _hoisted_2 = { class: "profile-navbar__icon" }
const _hoisted_3 = ["src"]
const _hoisted_4 = { class: "profile-navbar__label" }

import { useI18n } from 'vue-i18n'
const bonuses = new URL("../assets/nav-bonuses.svg", import.meta.url).href;
const casino = new URL("../assets/nav-casino.svg", import.meta.url).href;
const menu = new URL("../assets/nav-menu.svg", import.meta.url).href;
const profile = new URL("../assets/nav-profile.svg", import.meta.url).href;
const slots = new URL("../assets/nav-slots.svg", import.meta.url).href;
const sport = new URL("../assets/nav-sport.svg", import.meta.url).href;


export default {
  __name: 'ProfileNavbar',
  props: {
  links: { type: Object, default: () => ({}) },
},
  setup(__props) {

const props = __props

const { t } = useI18n()

const items = [
  { key: 'menu', icon: menu },
  { key: 'casino', icon: casino },
  { key: 'slots', icon: slots },
  { key: 'sport', icon: sport },
  { key: 'bonuses', icon: bonuses },
  { key: 'profile', icon: profile, current: true },
]

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("nav", {
    class: "profile-navbar",
    "aria-label": _unref(t)('profilePage.navigation'),
    "data-name": "profile-navbar",
    "data-ds-new": "profile-navbar",
    "data-ds-custom": "navbar-glass"
  }, [
    (_openBlock(), _createElementBlock(_Fragment, null, _renderList(items, (item) => {
      return _createVNode(_resolveDynamicComponent(props.links[item.key] || item.current ? 'a' : 'span'), {
        key: item.key,
        href: props.links[item.key] || (item.current ? '#profile-page' : undefined),
        "aria-current": item.current ? 'page' : undefined,
        class: "profile-navbar__item text-label-xs"
      }, {
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_2, [
            _createElementVNode("img", {
              src: item.icon,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_3)
          ]),
          _createElementVNode("span", _hoisted_4, _toDisplayString(_unref(t)(`profilePage.nav.${item.key}`)), 1 /* TEXT */)
        ]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href", "aria-current"])
    }), 64 /* STABLE_FRAGMENT */))
  ], 8 /* PROPS */, _hoisted_1))
}
}

}