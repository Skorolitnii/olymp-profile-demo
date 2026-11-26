import { unref as _unref, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createVNode as _createVNode, createTextVNode as _createTextVNode, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = {
  class: "loyalty-expanded-profile",
  "data-name": "expanded-loyalty-profile"
}
const _hoisted_2 = { class: "loyalty-expanded-profile__identity" }
const _hoisted_3 = { class: "loyalty-expanded-profile__avatar" }
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "loyalty-expanded-profile__figure" }
const _hoisted_6 = ["src"]
const _hoisted_7 = { class: "text-header-3xs" }
const _hoisted_8 = ["src"]
const _hoisted_9 = { class: "loyalty-expanded-profile__name text-header-xs" }
const _hoisted_10 = { class: "loyalty-expanded-profile__level text-label-xs" }
const _hoisted_11 = ["src", "alt"]
const _hoisted_12 = { class: "loyalty-expanded-profile__progress" }
const _hoisted_13 = { class: "loyalty-expanded-profile__bar" }
const _hoisted_14 = { class: "loyalty-expanded-profile__xp text-label-sm" }
const _hoisted_15 = { class: "loyalty-expanded-profile__reward text-header-3xs" }
const _hoisted_16 = {
  class: "loyalty-expanded-profile__coin",
  "aria-hidden": "true"
}
const _hoisted_17 = ["src"]
const _hoisted_18 = ["src"]

import { useI18n } from 'vue-i18n'
import { OlProgressBar } from '@gamesite/game-core'
const chevron = new URL("../assets/chevron-small.svg", import.meta.url).href;
const badge = new URL("../assets/level-badge-small.svg", import.meta.url).href;
const avatar = new URL("../assets/level-avatar.png", import.meta.url).href;
const info = new URL("../assets/loyalty-info.svg", import.meta.url).href;
const glassLettering = new URL("../assets/progress-coin-lettering-glass.svg", import.meta.url).href;
const lettering = new URL("../assets/progress-coin-lettering.svg", import.meta.url).href;
const coin = new URL("../assets/progress-coin.svg", import.meta.url).href;


export default {
  __name: 'LoyaltyExpandedProfile',
  props: {
  glass: { type: Boolean, default: false },
  programUrl: { type: String, default: '' },
},
  setup(__props) {

const props = __props

const { t } = useI18n()

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("span", _hoisted_3, [
        _createElementVNode("img", {
          src: _unref(avatar),
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4)
      ]),
      _createElementVNode("div", _hoisted_5, [
        (_openBlock(), _createBlock(_resolveDynamicComponent(props.programUrl ? 'a' : 'div'), {
          href: props.programUrl || undefined,
          class: _normalizeClass(["loyalty-expanded-profile__badge text-header-3xs", { 'loyalty-expanded-profile__badge_glass': props.glass }]),
          "data-ds-custom": "loyalty-badge-surface"
        }, {
          default: _withCtx(() => [
            _createElementVNode("img", {
              src: _unref(badge),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_6),
            _createElementVNode("h2", _hoisted_7, _toDisplayString(_unref(t)('loyaltyWidget.title')), 1 /* TEXT */),
            _createElementVNode("img", {
              src: _unref(chevron),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_8)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href", "class"])),
        _createElementVNode("p", _hoisted_9, _toDisplayString(_unref(t)('loyaltyWidget.player')), 1 /* TEXT */),
        _createElementVNode("p", _hoisted_10, _toDisplayString(_unref(t)('loyaltyWidget.level')), 1 /* TEXT */)
      ]),
      _createElementVNode("img", {
        class: "loyalty-expanded-profile__info",
        src: _unref(info),
        alt: _unref(t)('loyaltyWidget.information')
      }, null, 8 /* PROPS */, _hoisted_11)
    ]),
    _createElementVNode("div", _hoisted_12, [
      _createElementVNode("div", _hoisted_13, [
        _createVNode(_unref(OlProgressBar), {
          size: "sm",
          value: 7.5,
          "left-value": "",
          "right-value": "",
          "aria-hidden": "true"
        }),
        _createElementVNode("span", _hoisted_14, _toDisplayString(_unref(t)('loyaltyWidget.initialExperience')), 1 /* TEXT */)
      ]),
      _createElementVNode("div", _hoisted_15, [
        _createElementVNode("span", _hoisted_16, [
          _createElementVNode("img", {
            src: _unref(coin),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_17),
          _createElementVNode("img", {
            src: props.glass ? _unref(glassLettering) : _unref(lettering),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_18)
        ]),
        _createTextVNode(" " + _toDisplayString(_unref(t)('loyaltyWidget.expandedReward')), 1 /* TEXT */)
      ])
    ])
  ]))
}
}

}