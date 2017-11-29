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
                        <router-link :to="{name: 'login'}">
                            <button class="btn btn-lg btn-primary">Login</button>
                        </router-link>
                        <router-link :to="{name: 'signUp'}">
                            <button class="btn btn-lg btn-success">Sign Up</button>
                        </router-link>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <div class="jumbotron">
            <h1>Hello, world!</h1>
            <p>An interactive kanban website! Create boards, check off todos!</p>
            <router-link :to="{name: 'signUp'}">
                    <button class="btn btn-lg btn-primary">Create an Account</button>
                </router-link>
        </div>
        <div class="row">
            <div class="col-md-3 col-md-offset-1 well screenshot">
                <h3>Screenshots!</h3>
                <div class="thumbnail projects-thumb">
                    <a href="">
                        <img src="//placehold.it/300x250" alt="">
                    </a>
                    <div class="caption">
                        <h5>Project Name</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 well screenshot">
                <h3>Of</h3>
                <div class="thumbnail projects-thumb">
                    <a href="">
                        <img src="//placehold.it/300x250" alt="">
                    </a>
                    <div class="caption">
                        <h5>Project Name</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 well">
                <h3>The Product!</h3>
                <div class="thumbnail projects-thumb">
                    <a href="">
                        <img src="//placehold.it/300x250" alt="">
                    </a>
                    <div class="caption">
                        <h5>Project Name</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row info jumbotron">
            <div class="col-md-12">
                <h1>Information about the product!</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {

            }
        },
        components: {

        }

    }
</script>

<style scoped>
    .nav button {
        margin-top: 3rem;
    }
    .screenshot {
        margin-right: 6em;
    }
    .navbar-header {
        padding-left: 40rem;
    }
    .navbar-brand {
        font-size: 50px;
        padding-bottom: 1em;
    }

    
</style>