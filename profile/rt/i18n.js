// Подмена vue-i18n для превью: тексты из i18n/ru.js, язык один.
import { ref } from 'vue';

let messages = {};
const locale = ref('ru');

export function setMessages(next) {
  messages = next || {};
}

function t(key, params = {}) {
  const text = String(key).split('.').reduce((node, part) => (node == null ? node : node[part]), messages);
  if (typeof text !== 'string') return key;
  return text.replace(/\{(\w+)\}/g, (all, name) => (name in params ? params[name] : all));
}

export function useI18n() {
  return { t, locale };
}
