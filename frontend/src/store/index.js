import Vue from 'vue'
import Vuex from 'vuex'
import { Note } from '../api/notes'
import {
  ADD_NOTE,
  REMOVE_NOTE,
  SET_NOTES
} from './mutation-types.js'
Vue.use(Vuex)
// Состояние
const state = {
  notes: [] // список заметок
}
// Геттеры
const getters = {
  notes: state => state.notes // получаем список заметок из состояния
}
// Мутации
const mutations = {
  // Добавляем заметку в список
  [ADD_NOTE] (state, note) {
    state.notes = [note, ...state.notes]
  },
  // Убираем заметку из списка
  [REMOVE_NOTE] (state, { id }) {
    state.notes = state.notes.filter(note => {
      return note.id !== id
    })
  },
  // Задаем список заметок
  [SET_NOTES] (state, { notes }) {
    state.notes = notes
  }
}
// Действия
const actions = {
  createNote ({ commit }, noteData) {
    Note.create(noteData).then(note => {
      commit(ADD_NOTE, note)
    })
  },
  deleteNote ({ commit }, note) {
    Note.delete(note).then(response => {
      commit(REMOVE_NOTE, note)
    })
  },
  getNotes ({ commit }) {
    Note.list().then(notes => {
      commit(SET_NOTES, { notes })
    })
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
