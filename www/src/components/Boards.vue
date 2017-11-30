<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <h1 class="navbar-brand" href="#">Rule Them All</h1>
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
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
          <span class="glyphicon glyphicon-plus-sign"></span>  ADD BOARD</button>
      </div>
    </div>
    <!-- BOARD THUMBNAILS -->
    <div class="row">
      <div v-for="board in boards" class="col-md-3">
        <router-link :to="'/boards/'+board._id">
          <div style="background-image: url('https://images3.alphacoders.com/161/161177.jpg')" class="thumbnail">
            <!-- <img src="//placehold.it/100x100"> -->
            <div class="caption">
              <h3>{{board.name}}</h3>
            </div>
          </div>
        </router-link>
        <!-- REMOVE BUTTON -->
        <a href="#">
          <span @click="removeBoard(board)" class="glyphicon glyphicon-trash"></span>
        </a>
        <!-- <span @click="removeBoard(board)">x</span> -->
      </div>
    </div>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Board</h4>
          </div>
          <div class="modal-body">
            <!-- <form class="form" @submit.prevent="createBoard"> -->
              <div class="form-group">
                <label for="name">Board Name:</label>
                <input type="text" name="name" class="form-control" placeholder="board name" required v-model="board.name">
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" name="description" class="form-control" placeholder="what's this board for?" required v-model="board.description">
              </div>
              <div class="form-group">
                <button class="btn btn-success" data-dismiss="modal" @click="createBoard">Add Your New Board!</button>
              </div>
            <!-- </form> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'boards',
    data() {
      return {
        board: {
          name: "",
          description: ""
        }
      }
    },
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
        debugger
        this.$store.dispatch('createBoard', this.board)
        this.board = {
          name: "",
          description: ""
        }
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
  .thumbnail {
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
</style>