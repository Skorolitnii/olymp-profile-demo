import { unref as _unref, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createVNode as _createVNode, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, createElementBlock as _createElementBlock, normalizeClass as _normalizeClass } from "vue"

const _hoisted_1 = ["aria-label"]
const _hoisted_2 = ["src"]
const _hoisted_3 = {
  class: "loyalty-widget__temple",
  "data-ds-custom": "temple-crop",
  "aria-hidden": "true"
}
const _hoisted_4 = ["src"]
const _hoisted_5 = ["src"]
const _hoisted_6 = { class: "loyalty-widget__title text-trim-2xs" }
const _hoisted_7 = ["src"]
const _hoisted_8 = {
  class: "loyalty-widget__profile",
  "data-name": "loyalty-profile"
}
const _hoisted_9 = { class: "loyalty-widget__avatar" }
const _hoisted_10 = ["src"]
const _hoisted_11 = { class: "loyalty-widget__player" }
const _hoisted_12 = { class: "loyalty-widget__title text-trim-2xs" }
const _hoisted_13 = { class: "loyalty-widget__experience" }
const _hoisted_14 = { class: "loyalty-widget__caption text-label-xs" }
const _hoisted_15 = { class: "loyalty-widget__reward" }
const _hoisted_16 = { class: "loyalty-widget__reward-value text-header-3xs" }
const _hoisted_17 = ["aria-label"]
const _hoisted_18 = ["src"]
const _hoisted_19 = ["src"]
const _hoisted_20 = {
  class: "loyalty-widget__menu",
  "data-name": "loyalty-menu"
}
const _hoisted_21 = { class: "loyalty-widget__label text-label-xs" }
const _hoisted_22 = { class: "loyalty-widget__value text-header-xs" }
const _hoisted_23 = ["src"]
const _hoisted_24 = {
  class: "loyalty-widget__gifts",
  "data-ds-custom": "quest-collage",
  "aria-hidden": "true"
}
const _hoisted_25 = { class: "loyalty-widget__gift loyalty-widget__gift--top" }
const _hoisted_26 = ["src"]
const _hoisted_27 = { class: "loyalty-widget__gift loyalty-widget__gift--middle" }
const _hoisted_28 = ["src"]
const _hoisted_29 = { class: "loyalty-widget__gift loyalty-widget__gift--bottom" }
const _hoisted_30 = ["src"]
const _hoisted_31 = { class: "loyalty-widget__gift loyalty-widget__gift--clover" }
const _hoisted_32 = ["src"]
const _hoisted_33 = { class: "loyalty-widget__label text-label-xs" }
const _hoisted_34 = { class: "loyalty-widget__value text-header-xs" }
const _hoisted_35 = ["src", "alt"]
const _hoisted_36 = {
  class: "loyalty-widget__cart",
  "data-ds-custom": "cart-animation",
  "aria-hidden": "true"
}
const _hoisted_37 = ["src"]
const _hoisted_38 = {
  class: "loyalty-widget__hint text-label-xs",
  "data-name": "loyalty-hint",
  "data-ds-new": "loyalty-hint",
  "data-ds-custom": "hint-transition"
}
const _hoisted_39 = ["src"]
const _hoisted_40 = ["aria-hidden"]

import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { OlProgressBar } from '@gamesite/game-core'
const cart = new URL("../assets/cart-animation.svg", import.meta.url).href;
const chevronRight = new URL("../assets/chevron-right.svg", import.meta.url).href;
const freeSpinsCoin = new URL("../assets/free-spins-coin.svg", import.meta.url).href;
const freeSpinsLettering = new URL("../assets/free-spins-lettering.svg", import.meta.url).href;
const hintIcon = new URL("../assets/hint-icon.svg", import.meta.url).href;
const levelAvatar = new URL("../assets/level-avatar.png", import.meta.url).href;
const loyaltyLevel = new URL("../assets/loyalty-level.svg", import.meta.url).href;
const missionProgress = new URL("../assets/mission-progress.svg", import.meta.url).href;
const olpCoin = new URL("../assets/olp-coin.svg", import.meta.url).href;
const questClover = new URL("../assets/quest-clover.png", import.meta.url).href;
const questGifts = new URL("../assets/quest-gifts.png", import.meta.url).href;
const temple = new URL("../assets/temple.png", import.meta.url).href;
const topGlow = new URL("../assets/top-glow.svg", import.meta.url).href;

const hintIntervalMs = 5000

export default {
  __name: 'LoyaltyWidget',
  props: {
  programUrl: { type: String, default: '' },
  questsUrl: { type: String, default: '' },
  shopUrl: { type: String, default: '' },
},
  setup(__props) {

const props = __props

const { t } = useI18n()

const hintKeys = ['tasks', 'ranking', 'level', 'holiday', 'seasonalMap']
const activeHintIndex = ref(0)
let hintTimer

onMounted(() => {
  hintTimer = window.setInterval(() => {
    activeHintIndex.value = (activeHintIndex.value + 1) % hintKeys.length
  }, hintIntervalMs)
})

onUnmounted(() => window.clearInterval(hintTimer))

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("section", {
    class: "loyalty-widget",
    "data-theme": "blue",
    "data-name": "loyalty-widget",
    "data-ds-custom": "loyalty-glow",
    "aria-label": _unref(t)('loyaltyWidget.title')
  }, [
    _createElementVNode("img", {
      class: "loyalty-widget__glow",
      src: _unref(topGlow),
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_2),
    (_openBlock(), _createBlock(_resolveDynamicComponent(props.programUrl ? 'a' : 'div'), {
      href: props.programUrl || undefined,
      class: "loyalty-widget__program",
      "data-name": "loyalty-program",
      "data-ds-new": "loyalty-program-link"
    }, {
      default: _withCtx(() => [
        _createElementVNode("span", _hoisted_3, [
          _createElementVNode("img", {
            src: _unref(temple),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_4)
        ]),
        _createElementVNode("img", {
          src: _unref(loyaltyLevel),
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_5),
        _createElementVNode("h2", _hoisted_6, _toDisplayString(_unref(t)('loyaltyWidget.title')), 1 /* TEXT */),
        _createElementVNode("img", {
          src: _unref(chevronRight),
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_7)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["href"])),
    _createElementVNode("div", _hoisted_8, [
      _cache[0] || (_cache[0] = _createElementVNode("span", {
        class: "loyalty-widget__profile-surface",
        "aria-hidden": "true"
      }, null, -1 /* CACHED */)),
      _createElementVNode("div", _hoisted_9, [
        _createElementVNode("img", {
          src: _unref(levelAvatar),
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_10)
      ]),
      _createElementVNode("div", _hoisted_11, [
        _createElementVNode("p", _hoisted_12, _toDisplayString(_unref(t)('loyaltyWidget.player')), 1 /* TEXT */),
        _createElementVNode("div", _hoisted_13, [
          _createVNode(_unref(OlProgressBar), {
            size: "xs",
            value: 50,
            "aria-hidden": "true"
          }),
          _createElementVNode("div", _hoisted_14, [
            _createElementVNode("span", null, _toDisplayString(_unref(t)('loyaltyWidget.experience')), 1 /* TEXT */),
            _createElementVNode("span", _hoisted_15, [
              _createTextVNode(_toDisplayString(_unref(t)('loyaltyWidget.rewardLevel')) + " ", 1 /* TEXT */),
              _createElementVNode("span", _hoisted_16, _toDisplayString(_unref(t)('loyaltyWidget.reward')), 1 /* TEXT */),
              _createElementVNode("span", {
                class: "loyalty-widget__reward-coin",
                role: "img",
                "aria-label": _unref(t)('loyaltyWidget.rewardUnit')
              }, [
                _createElementVNode("img", {
                  src: _unref(freeSpinsCoin),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_18),
                _createElementVNode("img", {
                  src: _unref(freeSpinsLettering),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_19)
              ], 8 /* PROPS */, _hoisted_17)
            ])
          ])
        ])
      ])
    ]),
    _createElementVNode("div", _hoisted_20, [
      (_openBlock(), _createBlock(_resolveDynamicComponent(props.questsUrl ? 'a' : 'div'), {
        href: props.questsUrl || undefined,
        class: "loyalty-widget__tile",
        "data-name": "loyalty-quests",
        "data-ds-new": "loyalty-menu-tile"
      }, {
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_21, _toDisplayString(_unref(t)('loyaltyWidget.quests')), 1 /* TEXT */),
          _createElementVNode("span", _hoisted_22, [
            _createElementVNode("img", {
              src: _unref(missionProgress),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_23),
            _createTextVNode(" " + _toDisplayString(_unref(t)('loyaltyWidget.questProgress')), 1 /* TEXT */)
          ]),
          _createElementVNode("span", _hoisted_24, [
            _createElementVNode("span", _hoisted_25, [
              _createElementVNode("img", {
                src: _unref(questGifts),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_26)
            ]),
            _createElementVNode("span", _hoisted_27, [
              _createElementVNode("img", {
                src: _unref(questGifts),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_28)
            ]),
            _createElementVNode("span", _hoisted_29, [
              _createElementVNode("img", {
                src: _unref(questGifts),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_30)
            ]),
            _createElementVNode("span", _hoisted_31, [
              _createElementVNode("img", {
                src: _unref(questClover),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_32)
            ])
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"])),
      (_openBlock(), _createBlock(_resolveDynamicComponent(props.shopUrl ? 'a' : 'div'), {
        href: props.shopUrl || undefined,
        class: "loyalty-widget__tile",
        "data-name": "loyalty-shop",
        "data-ds-new": "loyalty-menu-tile"
      }, {
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_33, _toDisplayString(_unref(t)('loyaltyWidget.shop')), 1 /* TEXT */),
          _createElementVNode("span", _hoisted_34, [
            _createTextVNode(_toDisplayString(_unref(t)('loyaltyWidget.balance')) + " ", 1 /* TEXT */),
            _createElementVNode("img", {
              src: _unref(olpCoin),
              alt: _unref(t)('loyaltyWidget.balanceUnit')
            }, null, 8 /* PROPS */, _hoisted_35)
          ]),
          _createElementVNode("span", _hoisted_36, [
            _createElementVNode("img", {
              src: _unref(cart),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_37)
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]))
    ]),
    _createElementVNode("p", _hoisted_38, [
      _createElementVNode("img", {
        class: "loyalty-widget__hint-icon",
        src: _unref(hintIcon),
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_39),
      (_openBlock(), _createElementBlock(_Fragment, null, _renderList(hintKeys, (key, index) => {
        return _createElementVNode("span", {
          key: key,
          class: _normalizeClass(["loyalty-widget__hint-text", { 'loyalty-widget__hint-text_active': index === activeHintIndex.value }]),
          "aria-hidden": index !== activeHintIndex.value || undefined
        }, _toDisplayString(_unref(t)(`loyaltyWidget.hints.${key}`)), 11 /* TEXT, CLASS, PROPS */, _hoisted_40)
      }), 64 /* STABLE_FRAGMENT */))
    ])
  ], 8 /* PROPS */, _hoisted_1))
}
}

}