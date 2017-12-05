<template>
    <div class="login-page">
        <nav class="navbar">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <h1 class="navbar-brand nav-font">Rule Them All </h1>
                    <img class="navbar-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Unico_Anello.png/1200px-Unico_Anello.png">
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link :to="{name: 'Home'}">
                            <button class="btn btn-lg btn-shire btn-success">The Shire</button>
                        </router-link>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 login">
                    <h2>Join the Fellowship to Rule Them All</h2>
                    <!-- add error message if login fails -->
                    <p v-if="error"> {{error}}</p>
                    <form id="login" class="form" @submit.prevent="submitLogin">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" placeholder="Email" required v-model='login.email'>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" class="form-control" placeholder="password" required v-model='login.password'>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-submit btn-success" type="submit">Start Your Quest!</button>
                        </div>
                    </form>
                    <h3>Don't have an account?
                        <router-link :to="{name: 'signUp'}" class="register">Create one NOW!</router-link>
                    </h3>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                }

            }
        },
        components: {
        },
        methods: {
            submitLogin() {
                this.$store.dispatch('login', this.login)
                this.login = {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            error() {
                return this.$store.state.error.error
            }
        }
    }
</script>

<style scoped>
    .login-page{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGKKvILgnneTo2FivZ1Ib4VQ0Z-eWq3n3RinjX-p4MqoLwtBg');
        background-repeat: no-repeat;
        background-size:cover;
        height: 100vh;
    }
    .login {
        border: 2px ridge rgba(0, 0, 0, 0.301);
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.301);
        color: white;
    }
    .btn-shire:hover{
        box-shadow: 0px 0px 30px white
    }
    .btn-submit:hover{
        box-shadow: 0px 0px 30px white
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

    .nav button {
        margin-top: 3rem;
    }

    .navbar-header {
        padding-left: 40rem;
    }

    .navbar-brand {
        font-size: 50px;
        padding-bottom: 1em;
        font-family: 'Great Vibes', cursive;
    }
    .register:hover{
        text-decoration: none;
        color: rgba(241, 209, 105, 1);
        text-shadow: 0px 0px 1px white;
        font-size: 30px;
    }
   
</style>