<template>
    <div>
        <div class="row task">
            <div class="col-md-12">
                <button class="task-div" @click="setActiveTask" data-toggle="modal" data-target="#myModal" type="button">
                    <h5>{{task.name}}</h5>
                    <br>
                    <i class="fa fa-comment-o"></i>
                </button>
            </div>
        </div>
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h2 class="modal-title">{{activeTask.name}}</h2>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 ">
                                <h4 class="well comment-well" v-for="comment in comments">{{comment.comment}}<br>
                                    
                                        <button class="btn btn-warning btn-xs" @click="removeComment(activeTask, comment)">Golem's Hungry. Feed Him!</button>
                                    
                                </h4>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <input type="text" name="comment" class="form-control" placeholder="Your comment here..." required v-model="newComment">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" @click="createComment">Add To Inventory</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="dropup">
                            <button class="btn move-btn dropdown-toggle pull-left " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Fly (to new list) You Fools!
                                <span class="caret"></span>
                            </button>
                            <button @click="removeTask(activeTask)"class="btn btn-danger pull-right" type="button" data-dismiss="modal">Drop Item </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li v-for="list in lists">
                                    <a :value="list" @click="updateTask(list, activeTask)" data-dismiss="modal">{{list.name}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    import list from './List'
    export default {
        name: 'Task',
        props: ["task"],

        data() {
            return {
                newComment: ''
            }
        },
        mounted() {
            this.$store.dispatch('getCommentsByTaskId', this.task)

        },
        methods: {
            createComment() {
                this.$store.dispatch('addComment', { comment: this.newComment, boardId: this.activeTask.boardId, listId: this.activeTask.listId, taskId: this.activeTask._id })
                this.newComment = ''
            },
            setActiveTask() {
                this.$store.dispatch('getTaskbyTaskId', this.task)
            },
            updateTask(list, activeTask) {
                this.activeTask.oldId = this.activeTask.listId
                this.activeTask.listId = list._id
                this.$store.dispatch('updateTask', this.activeTask)
            },
            removeComment(activeTask, comment){
                this.$store.dispatch('deleteComment', {task: this.activeTask, comment: comment})
            },
            removeTask(activeTask){
                this.$store.dispatch('deleteTask', activeTask)
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments[this.activeTask._id]
            },
            activeTask() {
                return this.$store.state.activeTask
            },
            lists() {
                return this.$store.state.lists
            }
        },
        components: {
            list
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
        height: 10em;
        margin-bottom: 10px;
    }
    .modal .modal-dialog .modal-content{
        background-color: rgba(236, 196, 75, 0.897);
    }
    .comment-well{
        background-color: rgba(0, 0, 0, 0.609);
        border-color:rgba(236, 196, 75, 0.897);
        color:whitesmoke;
    }
    .comment-well button{
        margin-top:10px;
    }
    input[type=text]{
        background-color:rgba(0, 0, 0, 0.609);
        color: whitesmoke;
    }
    .move-btn{
        background-color: rgba(0, 0, 0, 0.609);
        color:whitesmoke;
    }
    .dropdown-menu{
        background-color: rgba(0, 0, 0, 0.609);
    }
    .dropdown-menu a{
        color:whitesmoke;
    }
    .dropdown-menu a:hover{
        background-color: rgba(236, 196, 75, 0.897);
        color:black;
    }

    /* .card{
              border:1px solid black;
            } */
</style>