<template>
  <div class="board">
    <!-- Active Board: {{board}} -->
    <nav class="navbar">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <h1 class="navbar-brand">Rule Them All </h1><img class="navbar-image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Unico_Anello.png/1200px-Unico_Anello.png">
          </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <router-link :to="{name: 'Boards'}">
              <button class="btn btn-success">Rivendale</button>
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
            <div class="col-md-2 list-div" v-for="list in lists">
              <list :list="list"></list>
              <button class="btn btn-danger" @click="deleteList(list)">Down to the Balrog</button>


            </div>
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary btn" @click="toggleInput">Add New Waypoint</button>
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

  import list from './List'
  export default {
    name: 'board',

    data() {
      return {
        input: false,
        list: '',
        // task: ''
      }
    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)   
      this.$store.dispatch('getListsByBoardId', this.$route.params.id)
        

      // this.$store.dispatch('getTasksByListId', this.list._id)




    },
    components: {
      list,
      // tasks
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      },
      // tasks(){
      //   return this.$store.state.tasks
      // }
    },
    methods: {
      addNewList() {
        this.$store.dispatch('addNewList', { name: this.list, boardId: this.board._id })
        this.list = ''
        this.toggleInput()
      },
      toggleInput() {
        this.input = !this.input
      },
      deleteList(list) {
        console.log(list)
        this.$store.dispatch('deleteList', list)
      },
      // addNewTask(){
      //   this.$store.dispatch('addNewTask',{ name: this.task, listId: this.list._id})
      //   this.task=''
      // }
    }
  }
</script>

<style scoped>
  .board{
    background-image: url('https://wallpapercave.com/wp/FOpS8au.jpg');
    height:100vh;
    background-position: center;
  }
  .nav button {
    margin-top: 3rem;
  }

  .navbar-header {
    padding-left: 40rem;
  }
  .navbar{
    background-color: rgba(0, 0, 0, 0.644);
    color:  rgba(241, 209, 105, 1);
  }
  .navbar-image{
    margin-top: 1em;
    margin-left: 3em;
    width: 75px;
  }

  .navbar-brand {
    font-size: 50px;
    padding-bottom: 1em;
  }
  .list-div{
    margin-left: 50px;
  }

  /* .card{
    border:1px solid black;
  } */
</style>