<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 login">
                    <h1>Log in to 'insert name here'</h1>
                    <!-- add error message if login fails -->
                    <p v-if="error"> {{error}}</p>
                    <form id="login" class="form" @submit.prevent="login">
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
    import SignUp from './SignUp'
    export default {
        name: 'login',
        data() {
            return {
                login:{
                    email: '',
                    password: ''
                }

            }
        },
        components: {
            SignUp
        },
        methods: {
            submitLogin() {
                this.$store.dispatch('login', this.login)
            }
        },
        computed:{
            error(){
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
</style>