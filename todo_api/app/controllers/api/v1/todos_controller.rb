class Api::V1::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos, status: 200
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo, status: 200
  end

  def create
    @todo = Todo.create(todo_params)
    render json: @todo, status: 200
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo, status: 200
  end

  def destroy
    @todo = Todo.find(params[:id])
    @tod0.delete
    render json: {todoId: @todo.id}
  end



  private

  def todo_params
    params.require(:todo).permit(:body)
  end












end
