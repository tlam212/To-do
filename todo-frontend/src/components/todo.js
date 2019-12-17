class Todo {
  constructor(todo){
    this.id = todo.id
    this.body = todo.body
  }

  renderLi(){
  return  `<span class="trashIcon"><i class="fas fa-trash-alt"></i></span>${this.body}`
  }
}
