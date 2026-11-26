import { unref as _unref, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createVNode as _createVNode, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = ["aria-label"]
const _hoisted_2 = {
  class: "profile-balance__main",
  "data-ds-new": "profile-balance-card",
  "data-ds-custom": "balance-glow"
}
const _hoisted_3 = { class: "profile-balance__figures" }
const _hoisted_4 = { class: "profile-balance__label text-label-xs" }
const _hoisted_5 = { class: "profile-balance__amount text-header-3xl" }
const _hoisted_6 = { class: "profile-balance__icon" }
const _hoisted_7 = ["src"]
const _hoisted_8 = { class: "profile-balance__icon" }
const _hoisted_9 = ["src"]
const _hoisted_10 = { class: "profile-balance__deposit-icon" }
const _hoisted_11 = ["src"]
const _hoisted_12 = { class: "profile-balance__cashback" }
const _hoisted_13 = { class: "text-header-md" }
const _hoisted_14 = {
  class: "profile-balance__cashback-card",
  "data-ds-new": "profile-cashback-card"
}
const _hoisted_15 = { class: "profile-balance__cashback-content" }
const _hoisted_16 = { class: "profile-balance__icon" }
const _hoisted_17 = ["src"]
const _hoisted_18 = { class: "profile-balance__cashback-figures" }
const _hoisted_19 = { class: "profile-balance__cashback-label text-header-3xs" }
const _hoisted_20 = ["src"]
const _hoisted_21 = { class: "text-header-xs" }
const _hoisted_22 = ["src"]

import { useI18n } from 'vue-i18n'
import { OlButton } from '@gamesite/game-core'
const chevron = new URL("../assets/balance-chevron.svg", import.meta.url).href;
const wallet = new URL("../assets/balance-wallet.svg", import.meta.url).href;
const exchange = new URL("../assets/cashback-exchange.svg", import.meta.url).href;
const info = new URL("../assets/cashback-info.svg", import.meta.url).href;
const lightning = new URL("../assets/cashback-lightning.svg", import.meta.url).href;
const plus = new URL("../assets/deposit-plus.svg", import.meta.url).href;


export default {
  __name: 'ProfileBalance',
  props: {
  links: { type: Object, default: () => ({}) },
},
  setup(__props) {

const props = __props

const { t } = useI18n()

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("section", {
    class: "profile-balance",
    "aria-label": _unref(t)('profilePage.balanceHeading')
  }, [
    _createElementVNode("div", _hoisted_2, [
      (_openBlock(), _createBlock(_resolveDynamicComponent(props.links.balance ? 'a' : 'div'), {
        href: props.links.balance,
        class: "profile-balance__summary"
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", _hoisted_3, [
            _createElementVNode("span", _hoisted_4, _toDisplayString(_unref(t)('profilePage.mainBalance')), 1 /* TEXT */),
            _createElementVNode("span", _hoisted_5, [
              _createElementVNode("span", _hoisted_6, [
                _createElementVNode("img", {
                  src: _unref(wallet),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_7)
              ]),
              _createTextVNode(" " + _toDisplayString(_unref(t)('profilePage.balanceAmount')), 1 /* TEXT */)
            ])
          ]),
          _createElementVNode("span", _hoisted_8, [
            _createElementVNode("img", {
              src: _unref(chevron),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_9)
          ])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"])),
      (_openBlock(), _createBlock(_resolveDynamicComponent(props.links.deposit ? 'a' : 'div'), {
        href: props.links.deposit,
        class: "profile-balance__action"
      }, {
        default: _withCtx(() => [
          _createVNode(_unref(OlButton), {
            tag: "span",
            label: _unref(t)('profilePage.deposit'),
            "full-width": ""
          }, {
            leftIcon: _withCtx(() => [
              _createElementVNode("span", _hoisted_10, [
                _createElementVNode("img", {
                  src: _unref(plus),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_11)
              ])
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["label"])
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]))
    ]),
    _createElementVNode("section", _hoisted_12, [
      _createElementVNode("h2", _hoisted_13, _toDisplayString(_unref(t)('profilePage.cashback')), 1 /* TEXT */),
      _createElementVNode("div", _hoisted_14, [
        _createElementVNode("div", _hoisted_15, [
          _createElementVNode("span", _hoisted_16, [
            _createElementVNode("img", {
              src: _unref(lightning),
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_17)
          ]),
          _createElementVNode("div", _hoisted_18, [
            _createElementVNode("span", _hoisted_19, [
              _createTextVNode(_toDisplayString(_unref(t)('profilePage.instant')) + " ", 1 /* TEXT */),
              _createElementVNode("img", {
                src: _unref(info),
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_20)
            ]),
            _createElementVNode("span", _hoisted_21, _toDisplayString(_unref(t)('profilePage.cashbackAmount')), 1 /* TEXT */)
          ])
        ]),
        (_openBlock(), _createBlock(_resolveDynamicComponent(props.links.exchange ? 'a' : 'div'), {
          href: props.links.exchange,
          "aria-label": _unref(t)('profilePage.exchange'),
          class: "profile-balance__action"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(OlButton), {
              tag: "span",
              size: "sm",
              variant: "secondary",
              "icon-only": ""
            }, {
              leftIcon: _withCtx(() => [
                _createElementVNode("img", {
                  src: _unref(exchange),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_22)
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href", "aria-label"]))
      ])
    ])
  ], 8 /* PROPS */, _hoisted_1))
}
}

}