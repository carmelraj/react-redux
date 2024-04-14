"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.todoCompleted = exports.editTodos = exports.deleteTodos = exports.addTodos = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var todoSlice = (0, _toolkit.createSlice)({
  name: "todo",
  initialState: {
    todo: [{
      id: 1,
      title: "todo1",
      isCompleted: false
    }]
  },
  reducers: {
    addTodos: function addTodos(state, action) {
      var newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        isCompleted: action.payload.isCompleted
      };
      state.todo.push(newTodo);
    },
    deleteTodos: function deleteTodos(state, action) {
      return _objectSpread({}, state, {
        todo: state.todo.filter(function (todo) {
          return todo.id !== action.payload.id;
        })
      });
    },
    editTodos: function editTodos(state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          title = _action$payload.title,
          isCompleted = _action$payload.isCompleted;
      var index = state.todo.findIndex(function (todo) {
        return todo.id === id;
      });

      if (index !== -1) {
        state.todo[index] = {
          id: id,
          title: title,
          isCompleted: isCompleted
        };
      }

      return state;
    },
    todoCompleted: function todoCompleted(state, action) {
      //   const { id, title, isCompleted } = acion.payload;
      var index = state.todo.findIndex(function (c) {
        return c.id === action.payload.id;
      });

      if (index !== -1) {
        state.todo[index].isCompleted = action.payload.isCompleted;
      }

      return state;
    }
  }
});
var _todoSlice$actions = todoSlice.actions,
    addTodos = _todoSlice$actions.addTodos,
    deleteTodos = _todoSlice$actions.deleteTodos,
    editTodos = _todoSlice$actions.editTodos,
    todoCompleted = _todoSlice$actions.todoCompleted;
exports.todoCompleted = todoCompleted;
exports.editTodos = editTodos;
exports.deleteTodos = deleteTodos;
exports.addTodos = addTodos;
var _default = todoSlice.reducer;
exports["default"] = _default;