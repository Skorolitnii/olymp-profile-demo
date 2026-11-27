import { unref as _unref, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = ["data-level", "aria-label"]
const _hoisted_2 = ["src"]

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const first = new URL("../assets/level-avatar.png", import.meta.url).href;
const second = new URL("../assets/level-avatar-2.png", import.meta.url).href;
const third = new URL("../assets/level-avatar-3.png", import.meta.url).href;
const fourth = new URL("../assets/level-avatar-4.png", import.meta.url).href;
const fifth = new URL("../assets/level-avatar-5.png", import.meta.url).href;
const sixth = new URL("../assets/level-avatar-6.png", import.meta.url).href;


export default {
  __name: 'LoyaltyAvatar',
  props: { level: { type: Number, default: 1 } },
  setup(__props) {

const props = __props
const { t } = useI18n()
const avatars = [first, second, third, fourth, fifth, sixth]
const level = computed(() => (avatars[props.level - 1] ? props.level : 1))

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("span", {
    class: "loyalty-avatar",
    "data-level": level.value,
    role: "img",
    "aria-label": _unref(t)('loyaltyWidget.level', { level: level.value })
  }, [
    _createElementVNode("img", {
      src: avatars[level.value - 1],
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_2)
  ], 8 /* PROPS */, _hoisted_1))
}
}

}