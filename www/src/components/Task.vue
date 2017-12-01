<template>
        <div>
            <div class="row task">
                <div class="col-md-12">
                   <button data-toggle="modal" data-target="#myModal" type="button"><h5>{{task.name}}</h5>
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
                          <!-- <form class="form" @submit.prevent="createBoard"> -->
                            <div class="form-group">
                              <label for="comment">Comment:</label>
                              <input type="text" name="comment" class="form-control" placeholder="Your comment here..." required v-model="newComment">
                            </div>
                            <div class="form-group">
                              <button class="btn btn-success" @click="createComment">Submit</button>
                            </div>
                          <!-- </form> -->
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
            methods:{
                createComment(){
                    this.$store.dispatch('addComment', {comment: this.newComment, boardId: this.task.boardId, listId: this.task.listId, taskId: this.task._id})
                    this.newComment = ''
                }
            },
            computed:{
                comments(){
                    return this.$store.state.comments[this.task._id]
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