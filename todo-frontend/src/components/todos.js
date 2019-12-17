class Todos {
  constructor(){
    this.todos = []
    this.adapter = new TodoAdapter()
    this.fetchTodos()
    this.init()
  }

  init(){
    this.todoContainer = document.getElementById('todo-container')
    this.toggleForm = document.getElementById('toggle-form')
    this.toggleForm.addEventListener('submit', this.createTodo.bind(this))
  }

  createTodo = (event) => {
    console.log(this)
    event.preventDefault()
    console.log(this.newTodoBody.value)

  }
  fetchTodos(){
    this.adapter.getTodos().then(todos => {
      todos.forEach(todo => this.todos.push(new Todo(todo)))
      console.log(this.todos)
    })
    .then(data => {
      this.renderToDom()
    })
  }

  renderToDom(){

    const ulTag = document.createElement('ul')
    const liTag = document.createElement('li')
    liTag.innerHTML = `${this.todos.map(todo => todo.renderLi())}`
    liTag.addEventListener("click", function(liTag){
    this.classList.toggle("completed")})
    ulTag.append(liTag)
    this.todoContainer.append(ulTag)


  }
}
