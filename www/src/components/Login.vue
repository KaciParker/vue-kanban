<template>
    <div> 
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Log in to 'insert name here'</h2>
                    <form id="login" class="form" @submit="login(email, password)">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" name="password" class="form-control" placeholder="password" required>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" type="submit">Log In!</button>
                        </div>
                    </form>
                    <h4>Don't have an account? <router-link :to="{name: 'signUp'}">Create one NOW!</router-link></h4>

                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
      import SignUp from './SignUp'
  export default {
    name: 'login',
    data(){
        return{
            
        }
    },
    components:{
        SignUp
    },
    methods:{
        login(email, password){
            this.$store.dispatch('login', {email, password})
        }
    }
  }
  </script>
  
  <style scoped>
  
  </style>