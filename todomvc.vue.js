import { createVNode as _createVNode, withKeys as _withKeys, unref as _unref, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, vModelCheckbox as _vModelCheckbox, withDirectives as _withDirectives, toDisplayString as _toDisplayString, vModelText as _vModelText, createCommentVNode as _createCommentVNode, vShow as _vShow } from "vue"

const _hoisted_1 = { id: "app" }
const _hoisted_2 = { class: "todoapp" }
const _hoisted_3 = { class: "header" }
const _hoisted_4 = /*#__PURE__*/_createVNode("h1", null, "todos", -1 /* HOISTED */)
const _hoisted_5 = { class: "main" }
const _hoisted_6 = /*#__PURE__*/_createVNode("label", { for: "toggle-all" }, "Mark all as complete", -1 /* HOISTED */)
const _hoisted_7 = { class: "todo-list" }
const _hoisted_8 = { class: "view" }
const _hoisted_9 = { class: "footer" }
const _hoisted_10 = { class: "todo-count" }
const _hoisted_11 = { class: "filters" }

import { ref, computed, watchEffect } from 'vue'


const __sfc__ = {
  setup(__props) {

const STORAGE_KEY = 'todos-petite-vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}

const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const visibility = ref('all')
const editedTodo = ref()

const filteredTodos = computed(() => filters[visibility.value](todos.value))
const remaining = computed(() => filters.active(todos.value).length)

function toggleAll(e) {
  todos.value.forEach((todo) => (todo.completed = e.target.checked))
}

function addTodo(e) {
  const value = e.target.value.trim()
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false
    })
    e.target.value = ''
  }
}

function removeTodo(todo) {
  todos.value.splice(todos.value.indexOf(todo), 1)
}

let beforeEditCache = ''

function editTodo(todo) {
  beforeEditCache = todo.title
  editedTodo.value = todo
}

function cancelEdit(todo) {
  editedTodo.value = null
  todo.title = beforeEditCache
}

function doneEdit(todo) {
  if (editedTodo.value) {
    editedTodo.value = null
    todo.title = todo.title.trim()
    if (!todo.title) removeTodo(todo)
  }
}

function removeCompleted() {
  todos.value = filters.active(todos.value)
}

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
})

function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, '')
  if (filters[route]) {
    visibility.value = route
  } else {
    window.location.hash = ''
    visibility.value = 'all'
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()

return (_ctx, _cache) => {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("section", _hoisted_2, [
      _createVNode("header", _hoisted_3, [
        _hoisted_4,
        _createVNode("input", {
          class: "new-todo",
          autofocus: "",
          placeholder: "What needs to be done?",
          onKeyup: _withKeys(addTodo, ["enter"])
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onKeyup"])
      ]),
      _withDirectives(_createVNode("section", _hoisted_5, [
        _createVNode("input", {
          id: "toggle-all",
          class: "toggle-all",
          type: "checkbox",
          checked: _unref(remaining) === 0,
          onChange: toggleAll
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["checked"]),
        _hoisted_6,
        _createVNode("ul", _hoisted_7, [
          (_openBlock(true), _createBlock(_Fragment, null, _renderList(_unref(filteredTodos), (todo) => {
            return (_openBlock(), _createBlock("li", {
              class: ["todo", { completed: todo.completed, editing: todo === editedTodo.value }],
              key: todo.id
            }, [
              _createVNode("div", _hoisted_8, [
                _withDirectives(_createVNode("input", {
                  class: "toggle",
                  type: "checkbox",
                  "onUpdate:modelValue": $event => (todo.completed = $event)
                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                  [_vModelCheckbox, todo.completed]
                ]),
                _createVNode("label", {
                  onDblclick: $event => (editTodo(todo))
                }, _toDisplayString(todo.title), 41 /* TEXT, PROPS, HYDRATE_EVENTS */, ["onDblclick"]),
                _createVNode("button", {
                  class: "destroy",
                  onClick: $event => (removeTodo(todo))
                }, null, 8 /* PROPS */, ["onClick"])
              ]),
              (todo === editedTodo.value)
                ? _withDirectives((_openBlock(), _createBlock("input", {
                    key: 0,
                    class: "edit",
                    type: "text",
                    "onUpdate:modelValue": $event => (todo.title = $event),
                    onVnodeMounted: _cache[1] || (_cache[1] = ({ el }) => el.focus()),
                    onBlur: $event => (doneEdit(todo)),
                    onKeyup: [
                      _withKeys($event => (doneEdit(todo)), ["enter"]),
                      _withKeys($event => (cancelEdit(todo)), ["escape"])
                    ]
                  }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onUpdate:modelValue", "onBlur", "onKeyup"])), [
                    [_vModelText, todo.title]
                  ])
                : _createCommentVNode("v-if", true)
            ], 2 /* CLASS */))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 512 /* NEED_PATCH */), [
        [_vShow, todos.value.length]
      ]),
      _withDirectives(_createVNode("footer", _hoisted_9, [
        _createVNode("span", _hoisted_10, [
          _createVNode("strong", null, _toDisplayString(_unref(remaining)), 1 /* TEXT */),
          _createVNode("span", null, _toDisplayString(_unref(remaining) === 1 ? 'item' : 'items') + " left", 1 /* TEXT */)
        ]),
        _createVNode("ul", _hoisted_11, [
          _createVNode("li", null, [
            _createVNode("a", {
              href: "#/all",
              class: { selected: visibility.value === 'all' }
            }, "All", 2 /* CLASS */)
          ]),
          _createVNode("li", null, [
            _createVNode("a", {
              href: "#/active",
              class: { selected: visibility.value === 'active' }
            }, "Active", 2 /* CLASS */)
          ]),
          _createVNode("li", null, [
            _createVNode("a", {
              href: "#/completed",
              class: { selected: visibility.value === 'completed' }
            }, "Completed", 2 /* CLASS */)
          ])
        ]),
        _withDirectives(_createVNode("button", {
          class: "clear-completed",
          onClick: removeCompleted
        }, " Clear completed ", 512 /* NEED_PATCH */), [
          [_vShow, todos.value.length > _unref(remaining)]
        ])
      ], 512 /* NEED_PATCH */), [
        [_vShow, todos.value.length]
      ])
    ])
  ]))
}
}

}
export default __sfc__