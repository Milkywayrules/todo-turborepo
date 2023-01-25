import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Todo from "../../Models/Todo";

export default class TodosController {
  public async index({}: HttpContextContract) {
    const todos = await Todo.all();

    return todos;
  }

  public async store({ request }: HttpContextContract) {
    const todo = await Todo.create(request.body());
    return todo;
  }

  public async show({ request }: HttpContextContract) {
    const todo = await Todo.find(request.params().id);
    return todo;
  }

  public async update({ request }: HttpContextContract) {
    const body = request.body();
    const todo = await Todo.findOrFail(request.params().id);
    todo.name = body.name;
    todo.description = body.description;
    todo.deadline = body.deadline;

    return todo;
  }

  public async destroy({ request }: HttpContextContract) {
    const todo = await Todo.findOrFail(request.params().id);
    await todo.delete();

    return "Delete todolist successfully";
  }
}
