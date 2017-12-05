<template>
  <div class="boards">
    <nav class="navbar ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <h1 class="navbar-brand">Rule Them All </h1><img class="navbar-image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Unico_Anello.png/1200px-Unico_Anello.png">
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <button class="btn btn-warning btn-lg" @click="logout">Quest Complete</button>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="row">
      <div class="col-md-2 col-md-offset-10">
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
          <span class="glyphicon glyphicon-plus-sign"></span> FORGE NEW BOARD</button>
      </div>
    </div>
    <!-- BOARD THUMBNAILS -->
    <div class="row">
      <div v-for="board in boards" class="col-md-3 board-btn">
        <router-link :to="'/boards/'+board._id">
          <div class="thumbnail">
            <!-- <img src="//placehold.it/100x100"> -->
            <div class="caption">
              <h3>{{board.name}}</h3>
            </div>
          </div>
        </router-link>
        <!-- REMOVE BUTTON -->
        
          <button @click="removeBoard(board)" class="btn btn-danger delete-btn">Cast into Mt. Doom</button>
        
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
        debugger
        this.$store.dispatch('removeBoard', board)
      },
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
  .boards{
    background-image: url('https://images3.alphacoders.com/161/161177.jpg');
    height:100vh;
    /* background-color: black; */
  }
  .nav button {
    margin-top: 3rem;
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
  .navbar-header {
    padding-left: 40rem;
  }

  .navbar-brand {
    font-size: 50px;
    padding-bottom: 1em;
  }
  .thumbnail {
    background-color: rgba(0, 0, 0, 0.527);
    border-color:  rgba(241, 209, 105, 1);
  }
  .caption{
    color: rgba(241, 209, 105, 1);
  }
  .delete-btn{
    display: none
  }
  .board-btn:hover .delete-btn{
    display:inline-block
  }

</style>