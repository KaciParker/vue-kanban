<template>
    <div>
        <div class="row task">
            <div class="col-md-12">
                <button @click="setActiveTask" data-toggle="modal" data-target="#myModal" type="button">
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
                        <h4 class="modal-title">Add Comment</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 v-for="comment in comments">{{comment.comment}}</h4>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <input type="text" name="comment" class="form-control" placeholder="Your comment here..." required v-model="newComment">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" @click="createComment">Submit</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

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
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments[this.task._id]
            },
            activeTask() {
                return this.$store.state.activeTask
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
    }

    /* .card{
              border:1px solid black;
            } */
</style>