<template>
  <div>
    <!-- Active Board: {{board}} -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <h1 class="navbar-brand" href="#">Rule Them All</h1>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <router-link :to="{name: 'Boards'}">
              <button class="btn btn-success">Home</button>
            </router-link>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="contatiner-fluid">
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-2" v-for="list in lists" >
              <lists  :title="list.name"></lists>
              <input type="text" placeholder="Add New Task" v-model="task">
              <button @click="deleteList(list)">delete list</button>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary btn-lg" @click="toggleInput">Add New List</button>
          <div class="card" v-if="input">
            <input type="text" placeholder="List Name" v-model="list">
            <button @click="addNewList" class="btn btn-success btn-sm">Submit</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import lists from './Lists'
  export default {
    name: 'board',

    data() {
      return {
        input: false,
        list: '',
        task: ''
      }
    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)

      this.$store.dispatch('getListsByBoardId', this.board._id)




    },
    components: {
      lists
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      addNewList() {
        this.$store.dispatch('addNewList', { name: this.list, boardId: this.board._id })
        this.list=''
        this.toggleInput()
      },
      toggleInput() {
        this.input = !this.input
      },
      deleteList(list){
        console.log(list)
        this.$store.dispatch('deleteList', list)
      }
    }
  }
</script>

<style scoped>
  .nav button {
    margin-top: 3rem;
  }

  .navbar-header {
    padding-left: 40rem;
  }

  .navbar-brand {
    font-size: 50px;
    padding-bottom: 1em;
  }

  /* .card{
    border:1px solid black;
  } */
</style>