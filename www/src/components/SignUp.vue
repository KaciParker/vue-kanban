<template>
    <div class="register-page">
        <nav class="navbar">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                        <h1 class="navbar-brand">Rule Them All </h1><img class="navbar-image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Unico_Anello.png/1200px-Unico_Anello.png">
                      </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link :to="{name: 'Home'}">
                            <button class="btn btn-lg btn-success">The Shire</button>
                        </router-link>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 sign-up">
                    <h2>Join the Fellowship to Rule Them All</h2>
                    <h3 class="text-danger" v-if="error"><b>YOU SHALL NOT PASS-words don't match</b></h3>
                    <form id="register" class="form" @submit.prevent="submitRegister">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" placeholder="Email" required v-model="signUp.email">
                        </div>
                        <div class="form-group">
                            <label for="displayName">Display Name:</label>
                            <input type="text" name="displayName" class="form-control" placeholder="display name" required v-model="signUp.name">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" class="form-control" placeholder="password" required v-model="signUp.password">
                        </div>
                        <div class="form-group">
                            <label for="reEnterPassword">Re-enter Password:</label>
                            <input type="password" name="reEnterPassword" class="form-control" placeholder="Re Enter Password" v-model="signUp.rPassword">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-success" type="submit">Complete Registration</button>

                        </div>
                    </form>
                    <h4>Already have an account?
                        <router-link :to="{name: 'login'}">Log in NOW!</router-link>
                    </h4>

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
                signUp: {
                    email: '',
                    name: '',
                    password: '',
                    rPassword: ''
                },
                error: false
            }
        },
        components: {
        },
        methods: {
            submitRegister() {
                // debugger
                if (this.signUp.password == this.signUp.rPassword) {

                    this.$store.dispatch('register', this.signUp)
                } else {
                    this.error = true
                    console.error({ error: "YOU SHALL NOT PASS-words dont match" })
                }
            }
        },
        computed: {
        
        }
    }
</script>

<style scoped>
    .register-page{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGKKvILgnneTo2FivZ1Ib4VQ0Z-eWq3n3RinjX-p4MqoLwtBg');
        background-repeat: no-repeat;
        background-size:cover;
        height: 100vh;
    }
    .sign-up {
        border: 2px ridge rgba(0, 0, 0, 0.301);
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.301);
        color: white;
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

    
</style>