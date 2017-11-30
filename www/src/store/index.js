import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import $ from 'jquery'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    error: {},
    user: {},
    lists:[],
    tasks:{}
  },
  mutations: {
    setBoards(state, data) {
      state.boards = data
    },
    setActiveBoard(state, board ){
      state.activeBoard = board
    },
    setLists(state, lists){
      state.lists = []
      state.lists = lists
    },
    handleError(state, err) {
      state.error = err
    },
    setUser(state, user) {
      state.user = user
    },
    setTasks(state, tasks){
      tasks.forEach(task=>{
        if(!state.tasks[task.listId]){
          state.tasks[task.listId] = []
        }
        state.tasks[task.listId].push(task)
      })
    }

  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
//Board Actions
    getBoards({ commit, dispatch }) {
      console.log("GET")
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, id) {
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({ commit, dispatch }, payload) {
      debugger
      api.post('boards/', payload)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    //List Actions
    addNewList({commit,dispatch}, payload){
      console.log(payload)
      api.post('lists', payload)
        .then(res => {
          console.log(res)
          dispatch('getListsByBoardId', res.data.data.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
      
    },
    getListsByBoardId({commit, dispatch},boardId){
      api('boards/' +boardId +'/lists')
      // console.log(boardId)
        .then(res => {
          commit('setLists', res.data.data)
        })
        .catch(err =>{commit('handleError', err)})
    },
    deleteList({commit, dispatch}, list){
      console.log(list)
      api.delete('lists/'+list._id)
        .then(res =>{
          dispatch('getListsByBoardId', res.data.data.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    addNewTask({commit,dispatch}, payload){
      console.log(payload)
      api.post('tasks', payload)
        .then(res=>{
          dispatch('getTasksByListId', {_id: res.data.data.listId, boardId: res.data.data.boardId})
        })
        .catch(err => {
          commit('handleError', err)
        })

    },
    getTasksByListId({commit, dispatch}, list){
      debugger
      api('boards/'+list.boardId+'/lists/' + list._id + '/tasks')
        .then(res =>{
          commit('setTasks', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    //LOGIN AND REGISTER

    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(err => { commit('handleError', err) })
    },
    register({ commit, dispatch}, payload){
      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({name: 'Boards'})
        })
        .catch((err)=>{
          { commit('handleError', err)}
        })
    },
    authenticate({commit, dispatch}){
      auth('authenticate')
        .then(res =>{
          commit('setUser', res.data.data)
          router.push({name: 'Boards'})
        })
        .catch(()=>{
          router.push({name: 'Home'})
        })
    },
    logout({commit, dispatch}){
      auth.delete('logout')
        .then((user)=>{
          user={}
          commit('setUser', user)
          router.push({name: 'Home'})
        })
    },






    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }

})


export default store
