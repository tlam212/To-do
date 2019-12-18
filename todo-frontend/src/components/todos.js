class Todos {
  constructor(){
    this.todos = []
    this.adapter = new TodoAdapter()
    this.fetchTodos()
    this.init()
  }

  init(){
    this.todoContainer = document.getElementById('todo-container')
    this.body = document.querySelector('body')
    this.newTodoBody = document.getElementById('new-todo-body')
    this.inputTag = document.querySelector('input')
    this.inputTag.addEventListener('keypress', this.createTodo)
    this.todoContainer.addEventListener('dblclick', this.editToDo)
    this.body.addEventListener('blur', this.updateTodo, true)
  }



  createTodo = (e) => {
  const value = this.inputTag.value
    if (e.which === 13){
        e.preventDefault()
        this.adapter.createTodo(value).then(todo => {
          this.todos.push(new Todo(todo))
          this.inputTag.value = ""
          this.renderToDom()
      })
    }
  }

  editToDo = (e) => {
    console.log(e.target)
    const li = e.target
    li.contentEditable = true
    li.focus()
    li.classList.add("editable")
    console.log('clicked')
  }

  updateTodo = (e) => {
    const li = e.target
    li.contentEditable = false
    li.classList.remove("editable")
    const newEdit = li.innerHTML
    const id = li.dataset.id
    this.adapter.updatedTodo(newEdit, id)


  }

  fetchTodos(){
    this.adapter.getTodos().then(todos => {
      todos.forEach(todo => this.todos.push(new Todo(todo)))
    })
    .then(data => {
      this.renderToDom()
    })
  }

  renderToDom(){
    const ulTag = document.createElement('ul')
    ulTag.innerHTML = `${this.todos.map(todo => todo.renderLi()).join('')}`
    this.todoContainer.append(ulTag)
  }
}
