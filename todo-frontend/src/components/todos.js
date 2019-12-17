class Todos {
  constructor(){
    this.todos = []
    this.adapter = new TodoAdapter()
    this.fetchTodos()
  }
  fetchTodos(){
    this.adapter.getTodos().then(todos => {
      console.log(todos)
    })
  }
}
