import { createVNode as _createVNode, unref as _unref, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createTextVNode as _createTextVNode, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue"

const _hoisted_1 = {
  class: "loyalty-expanded-profile",
  "data-name": "expanded-loyalty-profile"
}
const _hoisted_2 = { class: "loyalty-expanded-profile__identity" }
const _hoisted_3 = { class: "loyalty-expanded-profile__figure" }
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "text-header-3xs" }
const _hoisted_6 = ["src"]
const _hoisted_7 = { class: "loyalty-expanded-profile__name-row" }
const _hoisted_8 = { class: "loyalty-expanded-profile__name text-header-xs" }
const _hoisted_9 = { class: "loyalty-expanded-profile__level text-label-xs" }
const _hoisted_10 = ["src", "alt"]
const _hoisted_11 = { class: "loyalty-expanded-profile__progress" }
const _hoisted_12 = { class: "loyalty-expanded-profile__xp text-label-sm" }
const _hoisted_13 = {
  key: 0,
  class: "loyalty-expanded-profile__reward text-header-3xs"
}
const _hoisted_14 = {
  class: "loyalty-expanded-profile__coin",
  "aria-hidden": "true"
}
const _hoisted_15 = ["src"]
const _hoisted_16 = ["src"]

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { OlProgressBar } from '@gamesite/game-core'
const chevron = new URL("../assets/chevron-small.svg", import.meta.url).href;
const badge = new URL("../assets/level-badge-small.svg", import.meta.url).href;
const info = new URL("../assets/loyalty-info.svg", import.meta.url).href;
const glassLettering = new URL("../assets/progress-coin-lettering-glass.svg", import.meta.url).href;
const lettering = new URL("../assets/progress-coin-lettering.svg", import.meta.url).href;
const coin = new URL("../assets/progress-coin.svg", import.meta.url).href;
import LoyaltyAvatar from "./LoyaltyAvatar.vue.js?rev=games-levels";
import LoyaltyVipBadge from "./LoyaltyVipBadge.vue.js?rev=vip-levels";


export default {
  __name: 'LoyaltyExpandedProfile',
  props: {
  glass: { type: Boolean, default: false },
  level: { type: Number, default: 1 },
  programUrl: { type: String, default: '' },
},
  setup(__props) {

const props = __props

const { t } = useI18n()
const isFinalLevel = computed(() => props.level === 6)

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(LoyaltyAvatar, {
        class: "loyalty-expanded-profile__avatar",
        level: props.level,
        "aria-hidden": "true"
      }, null, 8 /* PROPS */, ["level"]),
      _createElementVNode("div", _hoisted_3, [
        (_openBlock(), _createBlock(_resolveDynamicComponent(props.programUrl ? 'a' : 'div'), {
          href: props.programUrl || undefined,
          class: _normalizeClass(["loyalty-expanded-profile__badge text-header-3xs", { 'loyalty-expanded-profile__badge_glass': props.glass }]),
          "data-ds-custom": "loyalty-badge-surface"
        }, {
          default: _withCtx(() => [
            _createElementVNode("img", {
              src: _unref(badge),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_4),
            _createElementVNode("h2", _hoisted_5, _toDisplayString(_unref(t)('loyaltyWidget.title')), 1 /* TEXT */),
            _createElementVNode("img", {
              src: _unref(chevron),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_6)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href", "class"])),
        _createElementVNode("div", _hoisted_7, [
          _createElementVNode("p", _hoisted_8, _toDisplayString(_unref(t)('loyaltyWidget.player')), 1 /* TEXT */),
          _createVNode(LoyaltyVipBadge, {
            level: props.level
          }, null, 8 /* PROPS */, ["level"])
        ]),
        _createElementVNode("p", _hoisted_9, _toDisplayString(_unref(t)('loyaltyWidget.level', { level: props.level })), 1 /* TEXT */)
      ]),
      _createElementVNode("img", {
        class: "loyalty-expanded-profile__info",
        src: _unref(info),
        alt: _unref(t)('loyaltyWidget.information')
      }, null, 8 /* PROPS */, _hoisted_10)
    ]),
    _createElementVNode("div", _hoisted_11, [
      _createElementVNode("div", {
        class: _normalizeClass(["loyalty-expanded-profile__bar", { 'loyalty-expanded-profile__bar_complete': isFinalLevel.value }])
      }, [
        _createVNode(_unref(OlProgressBar), {
          size: "sm",
          value: isFinalLevel.value ? 100 : 8.15,
          "left-value": "",
          "right-value": "",
          "aria-hidden": "true"
        }, null, 8 /* PROPS */, ["value"]),
        _createElementVNode("span", _hoisted_12, _toDisplayString(_unref(t)(isFinalLevel.value ? 'loyaltyWidget.completedExperience' : 'loyaltyWidget.initialExperience')), 1 /* TEXT */)
      ], 2 /* CLASS */),
      (!isFinalLevel.value)
        ? (_openBlock(), _createElementBlock("div", _hoisted_13, [
            _createElementVNode("span", _hoisted_14, [
              _createElementVNode("img", {
                src: _unref(coin),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_15),
              _createElementVNode("img", {
                src: props.glass ? _unref(glassLettering) : _unref(lettering),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_16)
            ]),
            _createTextVNode(" " + _toDisplayString(_unref(t)('loyaltyWidget.expandedReward')), 1 /* TEXT */)
          ]))
        : _createCommentVNode("v-if", true)
    ])
  ]))
}
}

}