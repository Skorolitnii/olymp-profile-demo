import { unref as _unref, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue"

const _hoisted_1 = {
  key: 0,
  class: "loyalty-vip-badge",
  "data-ds-new": "loyalty-vip-badge",
  "data-ds-custom": "loyalty-vip-gradient"
}
const _hoisted_2 = ["src"]
const _hoisted_3 = { class: "loyalty-vip-badge__label text-header-3xs" }

import { useI18n } from 'vue-i18n'
const crown = new URL("../assets/vip-crown.svg", import.meta.url).href;


export default {
  __name: 'LoyaltyVipBadge',
  props: { level: { type: Number, required: true } },
  setup(__props) {

const props = __props
const { t } = useI18n()

return (_ctx, _cache) => {
  return (props.level === 5 || props.level === 6)
    ? (_openBlock(), _createElementBlock("span", _hoisted_1, [
        _createElementVNode("img", {
          src: _unref(crown),
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_2),
        _createElementVNode("span", _hoisted_3, _toDisplayString(_unref(t)('loyaltyWidget.vip')), 1 /* TEXT */)
      ]))
    : _createCommentVNode("v-if", true)
}
}

}