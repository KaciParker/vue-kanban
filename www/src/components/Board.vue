<template>
  <div>
    <!-- Active Board: {{board}} -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <h1 class="navbar-brand" href="#">Stay on Track</h1>
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
  </div>
</template>

<script>
  export default {
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
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