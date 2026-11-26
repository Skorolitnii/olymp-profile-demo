import { unref as _unref, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createBlock as _createBlock, createCommentVNode as _createCommentVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx } from "vue"

const _hoisted_1 = ["aria-label"]
const _hoisted_2 = { class: "profile-menu__list" }
const _hoisted_3 = { class: "profile-menu__icon" }
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "profile-menu__label text-trim-xs" }
const _hoisted_6 = {
  key: 1,
  class: "profile-menu__icon"
}
const _hoisted_7 = ["src", "alt"]
const _hoisted_8 = { class: "profile-menu__icon" }
const _hoisted_9 = ["src"]

import { useI18n } from 'vue-i18n'
import { OlCounter } from '@gamesite/game-core'
const achievements = new URL("../assets/menu-achievements.svg", import.meta.url).href;
const balance = new URL("../assets/menu-balance.svg", import.meta.url).href;
const bonusShop = new URL("../assets/menu-bonus-shop.svg", import.meta.url).href;
const bonuses = new URL("../assets/menu-bonuses.svg", import.meta.url).href;
const chevron = new URL("../assets/menu-chevron.svg", import.meta.url).href;
const favorites = new URL("../assets/menu-favorites.svg", import.meta.url).href;
const lootboxes = new URL("../assets/menu-lootboxes.svg", import.meta.url).href;
const loyalty = new URL("../assets/menu-loyalty.svg", import.meta.url).href;
const messages = new URL("../assets/menu-messages.svg", import.meta.url).href;
const alert = new URL("../assets/menu-personal-alert.svg", import.meta.url).href;
const personal = new URL("../assets/menu-personal.svg", import.meta.url).href;


export default {
  __name: 'ProfileMenu',
  props: {
  links: { type: Object, default: () => ({}) },
},
  setup(__props) {

const props = __props

const { t } = useI18n()

const items = [
  { key: 'balance', icon: balance },
  { key: 'bonuses', icon: bonuses },
  { key: 'lootboxes', icon: lootboxes },
  { key: 'bonusShop', icon: bonusShop },
  { key: 'loyalty', icon: loyalty },
  { key: 'achievements', icon: achievements },
  { key: 'messages', icon: messages, count: 100 },
  { key: 'favorites', icon: favorites, count: 100 },
  { key: 'personal', icon: personal, warning: true },
]

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("nav", {
    class: "profile-menu",
    "aria-label": _unref(t)('profilePage.sections'),
    "data-ds-new": "profile-menu"
  }, [
    _createElementVNode("ul", _hoisted_2, [
      (_openBlock(), _createElementBlock(_Fragment, null, _renderList(items, (item) => {
        return _createElementVNode("li", {
          key: item.key
        }, [
          (_openBlock(), _createBlock(_resolveDynamicComponent(props.links[item.key] ? 'a' : 'div'), {
            href: props.links[item.key],
            class: "profile-menu__item"
          }, {
            default: _withCtx(() => [
              _createElementVNode("span", _hoisted_3, [
                _createElementVNode("img", {
                  src: item.icon,
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_4)
              ]),
              _createElementVNode("span", _hoisted_5, _toDisplayString(_unref(t)(`profilePage.menu.${item.key}`)), 1 /* TEXT */),
              (item.count)
                ? (_openBlock(), _createBlock(_unref(OlCounter), {
                    key: 0,
                    value: item.count,
                    variant: "secondary",
                    size: "md"
                  }, null, 8 /* PROPS */, ["value"]))
                : _createCommentVNode("v-if", true),
              (item.warning)
                ? (_openBlock(), _createElementBlock("span", _hoisted_6, [
                    _createElementVNode("img", {
                      src: _unref(alert),
                      alt: _unref(t)('profilePage.personalAlert')
                    }, null, 8 /* PROPS */, _hoisted_7)
                  ]))
                : _createCommentVNode("v-if", true),
              _createElementVNode("span", _hoisted_8, [
                _createElementVNode("img", {
                  src: _unref(chevron),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_9)
              ])
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"]))
        ])
      }), 64 /* STABLE_FRAGMENT */))
    ])
  ], 8 /* PROPS */, _hoisted_1))
}
}

}