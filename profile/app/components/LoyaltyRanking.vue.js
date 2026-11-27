import { unref as _unref, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = {
  class: "loyalty-ranking text-label-xs",
  "data-ds-new": "loyalty-ranking"
}
const _hoisted_2 = ["src"]

import { useI18n } from 'vue-i18n'
const podium = new URL("../assets/loyalty-ranking-podium.svg", import.meta.url).href;

const rankingPosition = 340

export default {
  __name: 'LoyaltyRanking',
  setup(__props) {

const { t } = useI18n()

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("span", _hoisted_1, [
    _createTextVNode(_toDisplayString(_unref(t)('loyaltyWidget.ranking')) + " ", 1 /* TEXT */),
    _createElementVNode("span", { class: "loyalty-ranking__position text-header-3xs" }, _toDisplayString(rankingPosition)),
    _createElementVNode("img", {
      src: _unref(podium),
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_2)
  ]))
}
}

}