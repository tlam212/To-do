class Todos {
  constructor(){
    this.todos = []
    this.adapter = new TodoAdapter()
    this.fetchTodos()
  }
  fetchTodos(){
    this.adapter.getTodos().then(todos => {
      todos.forEach(todo => this.todos.push(todo))
    })
    .then(data => {
      this.renderToDom()
    })
  }

  renderToDom(){
    const todoContainer = document.getElementById('todo-container')
    todoContainer.innerHTML = "new todo added"


    // todoUl = document.createElement('ul')
    // todoLi = document.createElement('li')
    // todoSpan = document.createElement('span')
    // todoSpan.classList.add('trashIcon')
    // icon = document.createElement('i')
    // icon.classList.add('fas fa-trash-alt')
    // todoDiv.append(todoUl)
    // todoUl.append(todoLi)
    // to

  }
}
