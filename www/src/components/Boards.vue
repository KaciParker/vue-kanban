<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <h1 class="navbar-brand" href="#">Stay on Track</h1>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <button class="btn btn-warning btn-lg" @click="logout">Logout</button>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="row">
      <div class="col-md-2 col-md-offset-10">
        <button @click="createBoard" type="button" class="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-plus-sign"></span>
          <b> Add Board</b>
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="board in boards" class="col-md-3">
        <router-link :to="'/boards/'+board._id">
          <div class="thumbnail">
            <img src="//placehold.it/100x100">
            <div class="caption">
              <h3>{{board.name}}</h3>
            </div>
          </div>
        </router-link>
        <span @click="removeBoard(board)">x</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'boards',
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('createBoard', {
          name: 'Testing board creation',
          description: 'blarg'
        })
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      },
      logout() {
        this.$store.dispatch('logout')
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
</style>