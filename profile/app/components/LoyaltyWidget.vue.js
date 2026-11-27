import { unref as _unref, createElementVNode as _createElementVNode, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock, createTextVNode as _createTextVNode, Fragment as _Fragment, normalizeClass as _normalizeClass, renderList as _renderList } from "vue"

const _hoisted_1 = ["data-version", "aria-label"]
const _hoisted_2 = {
  key: 0,
  class: "loyalty-widget__expanded"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "loyalty-widget__scene",
  "data-ds-custom": "loyalty-temple",
  "aria-hidden": "true"
}
const _hoisted_5 = ["src"]
const _hoisted_6 = ["src"]
const _hoisted_7 = {
  key: 0,
  class: "loyalty-widget__scene",
  "data-ds-custom": "loyalty-temple",
  "aria-hidden": "true"
}
const _hoisted_8 = ["src"]
const _hoisted_9 = {
  key: 0,
  class: "loyalty-widget__temple",
  "data-ds-custom": "temple-crop",
  "aria-hidden": "true"
}
const _hoisted_10 = ["src"]
const _hoisted_11 = ["src"]
const _hoisted_12 = { class: "loyalty-widget__title text-trim-2xs" }
const _hoisted_13 = ["src"]
const _hoisted_14 = {
  class: "loyalty-widget__profile",
  "data-name": "loyalty-profile"
}
const _hoisted_15 = { class: "loyalty-widget__player" }
const _hoisted_16 = { class: "loyalty-widget__name" }
const _hoisted_17 = { class: "loyalty-widget__title text-header-2xs" }
const _hoisted_18 = { class: "loyalty-widget__experience" }
const _hoisted_19 = { class: "loyalty-widget__caption text-label-xs" }
const _hoisted_20 = {
  key: 1,
  class: "loyalty-widget__reward"
}
const _hoisted_21 = { class: "loyalty-widget__reward-value text-header-3xs" }
const _hoisted_22 = ["aria-label"]
const _hoisted_23 = ["src"]
const _hoisted_24 = ["src"]
const _hoisted_25 = ["src"]
const _hoisted_26 = ["src"]
const _hoisted_27 = ["src", "alt"]
const _hoisted_28 = ["data-animation"]
const _hoisted_29 = {
  key: 0,
  class: "loyalty-widget__chest"
}
const _hoisted_30 = ["src"]
const _hoisted_31 = ["src"]
const _hoisted_32 = ["src"]
const _hoisted_33 = {
  class: "loyalty-widget__hint text-label-xs",
  "data-name": "loyalty-hint",
  "data-ds-new": "loyalty-hint",
  "data-ds-custom": "hint-transition"
}
const _hoisted_34 = ["src"]
const _hoisted_35 = ["aria-hidden"]

import { computed, onMounted, onUnmounted, ref, useId, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { OlProgressBar } from '@gamesite/game-core'
const chips = new URL("../assets/bonus-shop-chips.svg", import.meta.url).href;
const cart = new URL("../assets/cart-new-animated.svg", import.meta.url).href;
const chestFrames = new URL("../assets/chest-frames.webp", import.meta.url).href;
const chestGlow = new URL("../assets/chest-glow.svg", import.meta.url).href;
const chevronRight = new URL("../assets/chevron-right.svg", import.meta.url).href;
const freeSpinsCoin = new URL("../assets/free-spins-coin.svg", import.meta.url).href;
const wideLettering = new URL("../assets/free-spins-lettering-wide.svg", import.meta.url).href;
const freeSpinsLettering = new URL("../assets/free-spins-lettering.svg", import.meta.url).href;
const gifts = new URL("../assets/gifts-animated.svg", import.meta.url).href;
const hintIcon = new URL("../assets/hint-icon.svg", import.meta.url).href;
const loyaltyLevel = new URL("../assets/loyalty-level.svg", import.meta.url).href;
const missionProgress = new URL("../assets/mission-progress.svg", import.meta.url).href;
const olpCoin = new URL("../assets/olp-coin.svg", import.meta.url).href;
const questArtwork = new URL("../assets/quest-artwork-transparent.png", import.meta.url).href;
const temple = new URL("../assets/temple.png", import.meta.url).href;
const topGlow = new URL("../assets/top-glow.svg", import.meta.url).href;
import LoyaltyAvatar from "./LoyaltyAvatar.vue.js?rev=games-levels";
import LoyaltyExpandedProfile from "./LoyaltyExpandedProfile.vue.js?rev=level-ranking";
import LoyaltyRanking from "./LoyaltyRanking.vue.js?rev=level-ranking";
import LoyaltyVipBadge from "./LoyaltyVipBadge.vue.js?rev=vip-levels";

const hintIntervalMs = 5000

export default {
  __name: 'LoyaltyWidget',
  props: {
  version: { type: String, default: 'v1' },
  level: { type: Number, default: 1 },
  cardSize: { type: String, default: 'md' },
  shopAnimation: { type: String, default: 'cart' },
  programUrl: { type: String, default: '' },
  questsUrl: { type: String, default: '' },
  shopUrl: { type: String, default: '' },
},
  setup(__props) {

const props = __props

const { t } = useI18n()
const isFinalLevel = computed(() => props.level === 6)
const olpBalances = [238, 640, 1200, 2600, 5400, 10800]
const displayBalance = computed(() => {
  const balance = olpBalances[props.level - 1] ?? olpBalances[0]
  return balance > 1000 ? `${Number((balance / 1000).toFixed(1))}k` : String(balance)
})
const isExpanded = computed(() => props.version === 'v2' || props.version === 'v2.2')
const isLarge = computed(() => props.cardSize === 'lg')
const labelTypography = computed(() => (isLarge.value ? 'text-label-sm' : 'text-label-xs'))
const valueTypography = computed(() => (isLarge.value ? 'text-header-sm' : 'text-header-xs'))
const animationId = useId()
const animationRun = ref(0)
const shopAnimationAssets = new Map([
  ['cart', cart],
  ['chips', chips],
  ['gifts', gifts],
])

const shopAnimationSource = computed(() => {
  const asset = shopAnimationAssets.get(props.shopAnimation) ?? cart
  return `${asset}?play=${animationId}-${animationRun.value}`
})

async function startChestAnimation({ currentTarget: frames }) {
  const glow = frames.nextElementSibling
  await Promise.allSettled([frames.decode(), glow.decode()])
  // Give the first decoded frame a paint before starting the timeline.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      frames.dataset.ready = ''
    })
  })
}

watch(
  () => props.shopAnimation,
  () => {
    // A fresh image URL restarts the SVG timeline instead of reusing its final frame.
    animationRun.value += 1
  },
)

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
    class: _normalizeClass(["loyalty-widget", {
      'loyalty-widget_wide': props.version === 'v1.2',
      'loyalty-widget_expanded': isExpanded.value,
    }]),
    "data-version": props.version,
    "data-theme": "blue",
    "data-name": "loyalty-widget",
    "data-ds-custom": "loyalty-glow",
    "aria-label": _unref(t)('loyaltyWidget.title')
  }, [
    (isExpanded.value)
      ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
          _createElementVNode("img", {
            class: "loyalty-widget__glow",
            src: _unref(topGlow),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_3),
          _createElementVNode("span", _hoisted_4, [
            _createElementVNode("img", {
              src: _unref(temple),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_5)
          ]),
          _createVNode(LoyaltyExpandedProfile, {
            glass: props.version === 'v2.2',
            level: props.level,
            "program-url": props.programUrl
          }, null, 8 /* PROPS */, ["glass", "level", "program-url"])
        ]))
      : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
          _createElementVNode("img", {
            class: "loyalty-widget__glow",
            src: _unref(topGlow),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_6),
          (props.version === 'v1.2')
            ? (_openBlock(), _createElementBlock("span", _hoisted_7, [
                _createElementVNode("img", {
                  src: _unref(temple),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_8)
              ]))
            : _createCommentVNode("v-if", true),
          (_openBlock(), _createBlock(_resolveDynamicComponent(props.programUrl ? 'a' : 'div'), {
            href: props.programUrl || undefined,
            class: "loyalty-widget__program",
            "data-name": "loyalty-program",
            "data-ds-new": "loyalty-program-link"
          }, {
            default: _withCtx(() => [
              (props.version === 'v1')
                ? (_openBlock(), _createElementBlock("span", _hoisted_9, [
                    _createElementVNode("img", {
                      src: _unref(temple),
                      alt: ""
                    }, null, 8 /* PROPS */, _hoisted_10)
                  ]))
                : _createCommentVNode("v-if", true),
              _createElementVNode("img", {
                src: _unref(loyaltyLevel),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_11),
              _createElementVNode("h2", _hoisted_12, _toDisplayString(_unref(t)('loyaltyWidget.title')), 1 /* TEXT */),
              _createElementVNode("img", {
                src: _unref(chevronRight),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_13)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["href"])),
          _createElementVNode("div", _hoisted_14, [
            _cache[0] || (_cache[0] = _createElementVNode("span", {
              class: "loyalty-widget__profile-surface",
              "aria-hidden": "true"
            }, null, -1 /* CACHED */)),
            _createVNode(LoyaltyAvatar, {
              class: "loyalty-widget__avatar",
              level: props.level
            }, null, 8 /* PROPS */, ["level"]),
            _createElementVNode("div", _hoisted_15, [
              _createElementVNode("div", _hoisted_16, [
                _createElementVNode("p", _hoisted_17, _toDisplayString(_unref(t)('loyaltyWidget.player')), 1 /* TEXT */),
                _createVNode(LoyaltyVipBadge, {
                  level: props.level
                }, null, 8 /* PROPS */, ["level"])
              ]),
              _createElementVNode("div", _hoisted_18, [
                _createVNode(_unref(OlProgressBar), {
                  size: "xs",
                  value: isFinalLevel.value ? 100 : 50,
                  "aria-hidden": "true"
                }, null, 8 /* PROPS */, ["value"]),
                _createElementVNode("div", _hoisted_19, [
                  _createElementVNode("span", null, _toDisplayString(_unref(t)(isFinalLevel.value ? 'loyaltyWidget.completedExperience' : 'loyaltyWidget.experience')), 1 /* TEXT */),
                  (isFinalLevel.value)
                    ? (_openBlock(), _createBlock(LoyaltyRanking, { key: 0 }))
                    : (_openBlock(), _createElementBlock("span", _hoisted_20, [
                        _createTextVNode(_toDisplayString(_unref(t)('loyaltyWidget.rewardLevel', { level: props.level + 1 })) + " ", 1 /* TEXT */),
                        _createElementVNode("span", _hoisted_21, _toDisplayString(_unref(t)('loyaltyWidget.reward')), 1 /* TEXT */),
                        _createElementVNode("span", {
                          class: "loyalty-widget__reward-coin",
                          role: "img",
                          "aria-label": _unref(t)('loyaltyWidget.rewardUnit')
                        }, [
                          _createElementVNode("img", {
                            src: _unref(freeSpinsCoin),
                            alt: ""
                          }, null, 8 /* PROPS */, _hoisted_23),
                          _createElementVNode("img", {
                            src: props.version === 'v1.2' ? _unref(wideLettering) : _unref(freeSpinsLettering),
                            alt: ""
                          }, null, 8 /* PROPS */, _hoisted_24)
                        ], 8 /* PROPS */, _hoisted_22)
                      ]))
                ])
              ])
            ])
          ])
        ], 64 /* STABLE_FRAGMENT */)),
    _createElementVNode("div", {
      class: _normalizeClass(["loyalty-widget__menu", { 'loyalty-widget__menu_lg': isLarge.value }]),
      "data-name": "loyalty-menu"
    }, [
      (_openBlock(), _createBlock(_resolveDynamicComponent(props.questsUrl ? 'a' : 'div'), {
        href: props.questsUrl || undefined,
        class: "loyalty-widget__tile",
        "data-name": "loyalty-quests",
        "data-ds-new": "loyalty-menu-tile"
      }, {
        default: _withCtx(() => [
          _createElementVNode("span", {
            class: _normalizeClass(["loyalty-widget__label", labelTypography.value])
          }, _toDisplayString(_unref(t)('loyaltyWidget.quests')), 3 /* TEXT, CLASS */),
          _createElementVNode("span", {
            class: _normalizeClass(["loyalty-widget__value", valueTypography.value])
          }, [
            _createElementVNode("img", {
              src: _unref(missionProgress),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_25),
            _createTextVNode(" " + _toDisplayString(_unref(t)('loyaltyWidget.questProgress')), 1 /* TEXT */)
          ], 2 /* CLASS */),
          _createElementVNode("img", {
            class: "loyalty-widget__quest-artwork",
            src: _unref(questArtwork),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_26)
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
          _createElementVNode("span", {
            class: _normalizeClass(["loyalty-widget__label", labelTypography.value])
          }, _toDisplayString(_unref(t)('loyaltyWidget.shop')), 3 /* TEXT, CLASS */),
          _createElementVNode("span", {
            class: _normalizeClass(["loyalty-widget__value", valueTypography.value])
          }, [
            _createTextVNode(_toDisplayString(displayBalance.value) + " ", 1 /* TEXT */),
            _createElementVNode("img", {
              src: _unref(olpCoin),
              alt: _unref(t)('loyaltyWidget.balanceUnit')
            }, null, 8 /* PROPS */, _hoisted_27)
          ], 2 /* CLASS */),
          _createElementVNode("span", {
            class: "loyalty-widget__cart",
            "data-animation": props.shopAnimation,
            "data-name": "shop-animation",
            "data-ds-custom": "shop-animation",
            "aria-hidden": "true"
          }, [
            (props.shopAnimation === 'chest')
              ? (_openBlock(), _createElementBlock("span", _hoisted_29, [
                  _createElementVNode("img", {
                    class: "loyalty-widget__chest-frames",
                    src: _unref(chestFrames),
                    alt: "",
                    onLoad: startChestAnimation
                  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_30),
                  _createElementVNode("img", {
                    class: "loyalty-widget__chest-glow",
                    src: _unref(chestGlow),
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_31)
                ]))
              : (_openBlock(), _createElementBlock("img", {
                  key: props.shopAnimation,
                  src: shopAnimationSource.value,
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_32))
          ], 8 /* PROPS */, _hoisted_28)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]))
    ], 2 /* CLASS */),
    _createElementVNode("p", _hoisted_33, [
      _createElementVNode("img", {
        class: "loyalty-widget__hint-icon",
        src: _unref(hintIcon),
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_34),
      (_openBlock(), _createElementBlock(_Fragment, null, _renderList(hintKeys, (key, index) => {
        return _createElementVNode("span", {
          key: key,
          class: _normalizeClass(["loyalty-widget__hint-text", { 'loyalty-widget__hint-text_active': index === activeHintIndex.value }]),
          "aria-hidden": index !== activeHintIndex.value || undefined
        }, _toDisplayString(_unref(t)(`loyaltyWidget.hints.${key}`)), 11 /* TEXT, CLASS, PROPS */, _hoisted_35)
      }), 64 /* STABLE_FRAGMENT */))
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}
}

}