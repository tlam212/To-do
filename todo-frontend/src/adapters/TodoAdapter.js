class TodoAdapter {
  constructor(){
    this.baseURL = "http://localhost:3000/api/v1/todo"
  }

  getTodos() {
    return fetch(this.baseURL).then(resp => resp.json())
  }
}
