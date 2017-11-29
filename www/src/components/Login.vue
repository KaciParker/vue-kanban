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
                        <router-link :to="{name: 'Home'}">
                            <button class="btn btn-lg btn-success">Home</button>
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
                    <h1>Log in to Stay on Track</h1>
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
                            <button class="btn btn-success" type="submit">Log In!</button>
                        </div>
                    </form>
                    <h3>Don't have an account?
                        <router-link :to="{name: 'signUp'}">Create one NOW!</router-link>
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
    .login {
        border: 2px ridge rgba(0, 0, 0, 0.301);
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.301);
        color: white;
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
    }

    
</style>