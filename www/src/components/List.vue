<template>
    <div>
        <div class="row list">
            <div droppable="true" v-on:drop.capture="updateTask" ondragover="event.preventDefault()" class="col-md-12 well">
                <h3>{{list.name}}</h3>
                <div v-for="task in tasks">
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
                newTask: ''
            }
        },

        components: {
            task,

        },
        mounted() {
            this.$store.dispatch('getTasksByListId', this.list)
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.list._id]
            },
            activeTask(){
                return this.$store.state.activeTask
            }

        },
        methods: {
           
            addNewTask() {
                this.$store.dispatch('addNewTask', { name: this.newTask, listId: this.list._id, boardId: this.list.boardId })
                this.newTask = ''
            },
            updateTask() {
                var activeTask = this.activeTask
                var list = this.list
                debugger
                activeTask.oldId = activeTask.listId
                activeTask.listId = list._id
                this.$store.dispatch('updateTask', activeTask)
            },
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

    .task-div {
        width: 100%;
    }

    /* .card{
          border:1px solid black;
        } */
</style>