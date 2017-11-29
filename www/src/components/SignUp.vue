<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 sign-up">
                    <h2>Sign up for 'insert name here'</h2>
                    <form id="register" class="form" @submit="register">
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
    import SignUp from './SignUp'
    export default {
        name: 'login',
        data() {
            return {
                signUp:{
                    email: '',
                    name: '',
                    password: '',
                    rPassword: ''
                }
            }
        },
        components: {
            SignUp
        },
        methods: {
            submitRegister() {
                if(this.signUp.password == this.signUp.rPassword){

                    this.$store.dispatch('login', this.signUp)
                }else{
                    console.log({error: "passwords do not match"})
                }
            }
        }
    }
</script>

<style scoped>
    .sign-up {
        border: 2px ridge rgba(0, 0, 0, 0.301);
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.301);
        color:white;
    }
</style>