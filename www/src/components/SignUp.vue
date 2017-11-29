<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Sign up for 'insert name here'</h2>
                    <form id="register" class="form" @submit="register(email, userName, password)">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <label for="displayName">Display Name:</label>
                            <input type="text" name="displayName" class="form-control" placeholder="display name" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" class="form-control" placeholder="password" required>
                        </div>
                        <div class="form-group">
                            <label for="reEnterPassword">Re-enter Password:</label>
                            <input type="password" name="reEnterPassword" class="form-control" placeholder="Re Enter Password">
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

            }
        },
        components: {
            SignUp
        },
        methods: {
            login(email, password) {
                this.$store.dispatch('login', { email, password })
            }
        }
    }
</script>

<style scoped>
</style>