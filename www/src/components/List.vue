<template>
    <div>
        <div class="row list">
            <div class="col-md-12 well">
                <h3>{{list.name}}</h3>
                <div  draggable="true" v-for="task in tasks" v-on:dragstart.capture="moving">
                    <task :task="task"></task>
                </div>
                <form @submit.prevent="addNewTask">
                    <input type="text" placeholder="Add New Task" v-model="newTask">
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import task from './Task'
    export default {
        name: 'List',
        props: ["list"],

        data() {
            return {
                newTask:''
            }
        },
        
        components: {
            task,
            
        },
        mounted(){
            this.$store.dispatch('getTasksByListId', this.list)
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.list._id]
            },
           
        },
        methods: {
            moving(event){
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.task))
            },
            addNewTask() {
                this.$store.dispatch('addNewTask', { name: this.newTask, listId: this.list._id, boardId: this.list.boardId })
                this.newTask = ''
            }
        }

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
        font-family: 'Great Vibes', cursive;
    }
    .task-div{
        width: 100%;
    }
    /* .card{
          border:1px solid black;
        } */
</style>