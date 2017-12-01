<template>
        <div>
            <div class="row task">
                <div class="col-md-12">
                    <h1>{{task.name}}</h1>

                </div>
            </div>

        </div>
    
    </template>
    
    <script>
    
        export default {
            name: 'Task',
            props: ["task"],
    
            data() {
                return {
                }
            },
    
        }
    </script>
    
    <style scoped>
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
    
        /* .card{
              border:1px solid black;
            } */
    </style>