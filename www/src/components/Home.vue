<template>
    <div> 
      
        



        <router-link :to="{name: 'login'}"><button>Login</button></router-link>
        <router-link :to="{name: 'signUp'}"><button>Sign Up</button></router-link>
    </div>
  </template>
  
  <script>
      import Login from './Login'
  export default {
    name: 'home',
    data(){
        return{

        }
    },
    components:{
        Login
    }
   
  }
  </script>
  
  <style scoped>
  
  </style>