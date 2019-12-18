class TodoAdapter {
  constructor(){
    this.baseURL = "http://localhost:3000/api/v1/todos"
  }

  getTodos() {
    return fetch(this.baseURL).then(resp => resp.json())
  }

  createTodo(value){
    const todo = {
      body: value,
    }
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    })
    .then(resp => resp.json())

  }

  updatedTodo(value, id){
    const todo = {
      body: value,
    }

    return fetch(`${this.baseURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    })
    .then(resp => resp.json())

  }
}
