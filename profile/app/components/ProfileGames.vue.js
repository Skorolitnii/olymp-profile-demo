import { unref as _unref, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createVNode as _createVNode, withCtx as _withCtx, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderList as _renderList, withModifiers as _withModifiers, withKeys as _withKeys, normalizeClass as _normalizeClass } from "vue"

const _hoisted_1 = ["aria-labelledby"]
const _hoisted_2 = { class: "profile-games__header" }
const _hoisted_3 = ["id"]
const _hoisted_4 = { class: "profile-games__icon" }
const _hoisted_5 = ["src"]
const _hoisted_6 = { class: "profile-games__actions" }
const _hoisted_7 = ["src"]
const _hoisted_8 = ["src"]
const _hoisted_9 = ["id", "aria-labelledby", "tabindex"]
const _hoisted_10 = { class: "profile-games__cover" }
const _hoisted_11 = ["src"]
const _hoisted_12 = {
  key: 0,
  class: "profile-games__badges",
  "aria-hidden": "true"
}
const _hoisted_13 = ["src"]
const _hoisted_14 = { class: "profile-games__caption" }
const _hoisted_15 = ["title"]
const _hoisted_16 = ["src"]

import { nextTick, onMounted, onUnmounted, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { OlButton } from '@gamesite/game-core'
const gates = new URL("../assets/game-gates.png", import.meta.url).href;
const coinPrincess = new URL("../assets/game-coin-princess.png", import.meta.url).href;
const royalFruits = new URL("../assets/game-royal-fruits.png", import.meta.url).href;
const megaBooming = new URL("../assets/game-mega-booming.png", import.meta.url).href;
const hellHot = new URL("../assets/game-hell-hot.png", import.meta.url).href;
const voltageBlitz = new URL("../assets/game-voltage-blitz.png", import.meta.url).href;
const recommended = new URL("../assets/games-recommended.svg", import.meta.url).href;
const previous = new URL("../assets/games-prev.svg", import.meta.url).href;
const next = new URL("../assets/games-next.svg", import.meta.url).href;
const favorite = new URL("../assets/games-favorite.svg", import.meta.url).href;
const hotBadge = new URL("../assets/game-tag-hot.svg", import.meta.url).href;
const tournamentBadge = new URL("../assets/game-tag-tournament.svg", import.meta.url).href;
const jackpotBadge = new URL("../assets/game-tag-jackpot.svg", import.meta.url).href;
const instantBadge = new URL("../assets/game-tag-instant.svg", import.meta.url).href;


export default {
  __name: 'ProfileGames',
  setup(__props) {

const { t } = useI18n()
const headingId = useId()
const listId = useId()
const gameList = ref(null)
const allGames = ref(false)
const favorites = ref(new Set())
const canScrollBack = ref(false)
const canScrollForward = ref(false)
const badges = [hotBadge, tournamentBadge, jackpotBadge, instantBadge]
const games = [
  { id: 'gates', title: 'Gates of Olympus 1000', cover: gates },
  { id: 'coin-princess', title: 'Coin Princess x1000', cover: coinPrincess },
  { id: 'royal-fruits', title: "Royal Fruits 5: Hold 'n' Link", cover: royalFruits },
  { id: 'mega-booming', title: 'Mega Booming Fruits', cover: megaBooming },
  { id: 'hell-hot', title: 'Hell Hot 100', cover: hellHot },
  { id: 'voltage-blitz', title: 'Voltage Blitz Rapid', cover: voltageBlitz },
  { id: 'gates-featured', title: 'Gates of Olympus 1000', cover: gates, badges: true },
]

let observer

function updateArrows() {
  const { scrollLeft, scrollWidth, clientWidth } = gameList.value
  canScrollBack.value = scrollLeft > 1
  canScrollForward.value = scrollLeft + clientWidth < scrollWidth - 1
}

function scrollGames(direction) {
  const list = gameList.value
  const [firstCard, secondCard] = list.children
  const step = secondCard.offsetLeft - firstCard.offsetLeft
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  list.scrollBy({ left: step * direction, behavior })
}

async function toggleAllGames() {
  allGames.value = !allGames.value
  await nextTick()
  if (gameList.value) updateArrows()
}

function toggleFavorite(game) {
  if (favorites.value.has(game)) favorites.value.delete(game)
  else favorites.value.add(game)
}

onMounted(() => {
  observer = new ResizeObserver(updateArrows)
  observer.observe(gameList.value)
  updateArrows()
})
onUnmounted(() => observer.disconnect())

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("section", {
    class: "profile-games",
    "aria-labelledby": _unref(headingId),
    "data-ds-new": "profile-games"
  }, [
    _createElementVNode("header", _hoisted_2, [
      _createElementVNode("h2", {
        id: _unref(headingId),
        class: "profile-games__heading text-header-md"
      }, [
        _createElementVNode("span", _hoisted_4, [
          _createElementVNode("img", {
            src: _unref(recommended),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_5)
        ]),
        _createTextVNode(" " + _toDisplayString(_unref(t)('profilePage.games.heading')), 1 /* TEXT */)
      ], 8 /* PROPS */, _hoisted_3),
      _createElementVNode("div", _hoisted_6, [
        _createVNode(_unref(OlButton), {
          size: "xs",
          variant: "tertiary",
          label: _unref(t)(allGames.value ? 'profilePage.games.collapse' : 'profilePage.games.all'),
          "aria-expanded": allGames.value,
          "aria-controls": _unref(listId),
          onClick: toggleAllGames
        }, null, 8 /* PROPS */, ["label", "aria-expanded", "aria-controls"]),
        (!allGames.value)
          ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
              _createVNode(_unref(OlButton), {
                size: "xs",
                variant: "secondary",
                "icon-only": "",
                "aria-label": _unref(t)('profilePage.games.previous'),
                "aria-controls": _unref(listId),
                disabled: !canScrollBack.value,
                onClick: _cache[0] || (_cache[0] = $event => (scrollGames(-1)))
              }, {
                leftIcon: _withCtx(() => [
                  _createElementVNode("img", {
                    src: _unref(previous),
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_7)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["aria-label", "aria-controls", "disabled"]),
              _createVNode(_unref(OlButton), {
                size: "xs",
                variant: "secondary",
                "icon-only": "",
                "aria-label": _unref(t)('profilePage.games.next'),
                "aria-controls": _unref(listId),
                disabled: !canScrollForward.value,
                onClick: _cache[1] || (_cache[1] = $event => (scrollGames(1)))
              }, {
                leftIcon: _withCtx(() => [
                  _createElementVNode("img", {
                    src: _unref(next),
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_8)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["aria-label", "aria-controls", "disabled"])
            ], 64 /* STABLE_FRAGMENT */))
          : _createCommentVNode("v-if", true)
      ])
    ]),
    _createElementVNode("ul", {
      id: _unref(listId),
      ref_key: "gameList",
      ref: gameList,
      class: _normalizeClass(["profile-games__list", { 'profile-games__list_all': allGames.value }]),
      "aria-labelledby": _unref(headingId),
      tabindex: allGames.value ? undefined : 0,
      onScrollPassive: updateArrows,
      onKeydown: [
        _cache[2] || (_cache[2] = _withKeys(_withModifiers($event => (scrollGames(-1)), ["self","prevent"]), ["left"])),
        _cache[3] || (_cache[3] = _withKeys(_withModifiers($event => (scrollGames(1)), ["self","prevent"]), ["right"]))
      ]
    }, [
      (_openBlock(), _createElementBlock(_Fragment, null, _renderList(games, (game) => {
        return _createElementVNode("li", {
          key: game.id,
          class: "profile-games__card",
          "data-ds-new": "profile-game-card"
        }, [
          _createElementVNode("div", _hoisted_10, [
            _createElementVNode("img", {
              src: game.cover,
              alt: "",
              loading: "lazy"
            }, null, 8 /* PROPS */, _hoisted_11),
            (game.badges)
              ? (_openBlock(), _createElementBlock("div", _hoisted_12, [
                  (_openBlock(), _createElementBlock(_Fragment, null, _renderList(badges, (badge) => {
                    return _createElementVNode("img", {
                      key: badge,
                      src: badge,
                      alt: ""
                    }, null, 8 /* PROPS */, _hoisted_13)
                  }), 64 /* STABLE_FRAGMENT */))
                ]))
              : _createCommentVNode("v-if", true)
          ]),
          _createElementVNode("div", _hoisted_14, [
            _createElementVNode("span", {
              class: "profile-games__name text-body-sm",
              title: game.title
            }, _toDisplayString(game.title), 9 /* TEXT, PROPS */, _hoisted_15),
            _createVNode(_unref(OlButton), {
              size: "xs",
              variant: favorites.value.has(game.title) ? 'secondary' : 'tertiary',
              "icon-only": "",
              "aria-label": _unref(t)('profilePage.games.favorite', { game: game.title }),
              "aria-pressed": favorites.value.has(game.title),
              onClick: $event => (toggleFavorite(game.title))
            }, {
              leftIcon: _withCtx(() => [
                _createElementVNode("img", {
                  src: _unref(favorite),
                  alt: ""
                }, null, 8 /* PROPS */, _hoisted_16)
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["variant", "aria-label", "aria-pressed", "onClick"])
          ])
        ])
      }), 64 /* STABLE_FRAGMENT */))
    ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_9)
  ], 8 /* PROPS */, _hoisted_1))
}
}

}