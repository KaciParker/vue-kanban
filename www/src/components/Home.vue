<template>
    <div class="home">
        <nav class="navbar">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <h1 class="navbar-brand">Rule Them All </h1>
                    <img class="navbar-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Unico_Anello.png/1200px-Unico_Anello.png">
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link :to="{name: 'login'}">
                            <button class="btn btn-lg btn-start">Start Your Quest</button>
                        </router-link>
                        <router-link :to="{name: 'signUp'}">
                            <button class="btn btn-lg btn-register btn-success">Join the Fellowship</button>
                        </router-link>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <div class="jumbotron hobbit">
            <h1>Welcome Hobbits, Elves, Dwarves, and Men</h1>
            <p>A fun, fantasy themed kanban website! Create boards, check off todos, all while making your tasks a little less
                tedious!</p>
            <router-link :to="{name: 'signUp'}">
                <button class="btn btn-lg btn-reg btn-success">Join the Fellowship</button>
            </router-link>
        </div>
        <div class="row">
            <div class="col-md-3 col-md-offset-1 well screenshot">
                <h3>Create</h3>
                <div class="thumbnail projects-thumb">
                    <a href="">
                        <img src="../assets/boards.png" alt="">
                    </a>
                    <div class="caption">
                        <h5>Boards</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 well screenshot">
                <h3>Your Own</h3>
                <div class="thumbnail projects-thumb">
                    <a>
                        <img src="../assets/list-task.png" alt="">
                    </a>
                    <div class="caption">
                        <h5>Lists and Tasks</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 well screenshot">
                <h3>Themed...</h3>
                <div class="thumbnail projects-thumb">
                    <a>
                        <img src="../assets/comments.png" alt="">
                    </a>
                    <div class="caption">
                        <h5>Comments</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row info jumbotron">
            <div class="col-md-6 col-md-offset-3 text-justify info-text">
                <h3>Join "Rule Them All" today! Sign up for a free account and manage all of your projects in a fun kanban-style
                    website. Sure you could finish up tasks and be productive in a drab gray color scheme. But we ask this-
                    why not CONQUER your to-dos?! Make your boards quests! Your lists as simple as defeating Saurumon, or
                    as difficult as leaving the comforts of the Shire. Create your own boards, forge new lists, attach your
                    tasks and get to questing..err.. commenting! Interactively moving your tasks from list to list is as
                    easy as tossing a dwarf! So create an account, build some boards, and start having fun with your productivity.</h3>
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
    .home {
        background-color: rgba(0, 0, 0, 0.897);
        height: 100%;
    }

    .hobbit {
        background-image: url('http://www.bsdesigns.info/wp-content/uploads/2017/03/Luxury-hobbit-homes-X12D.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        color: white;
        font-family: 'Macondo Swash Caps', cursive;
        text-shadow: 0px 0px 5px black;


    }

    .btn-start {
        background-color: rgba(241, 209, 105, 1);
        color: black;
    }

    .btn-start:hover {
        box-shadow: 0px 0px 30px white;
    }

    .btn-register:hover {
        box-shadow: 0px 0px 30px white;
    }

    .btn-reg:hover {
        box-shadow: 0px 0px 30px black;
    }

    .nav button {
        margin-top: 3rem;
    }

    .navbar {
        background-color: rgba(0, 0, 0, 0.644);
        color: rgba(241, 209, 105, 1);
    }

    .navbar-image {
        margin-top: 1em;
        margin-left: 3em;
        width: 75px;
    }

    .screenshot {
        margin-right: 5em;
        height: 25em;
        font-family: 'Macondo Swash Caps', cursive;
    }

    .navbar-header {
        padding-left: 40rem;
    }

    .navbar-brand {
        font-size: 50px;
        padding-bottom: 1em;
        font-family: 'Great Vibes', cursive;
    }

    .info-text {
        font-family: 'Macondo Swash Caps', cursive;
    }
</style>