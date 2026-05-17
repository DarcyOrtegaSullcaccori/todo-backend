const todoService = require('../services/todo.service');

// Controlador: maneja las peticiones HTTP y delega la lógica al servicio
class TodoController {
    // GET /todos - retorna todos los todos
    async getAll(req, reply) { reply.send(await todoService.getAllTodos()); }

    // POST /todos - crea un nuevo todo con los datos del body
    async create(req, reply) { reply.code(201).send(await todoService.createTodo(req.body)); }

    // PUT /todos/:id - actualiza un todo existente por id
    async update(req, reply) { reply.send(await todoService.updateTodo(req.params.id, req.body)); }

    // DELETE /todos/:id - elimina un todo y responde con 204 No Content
    async delete(req, reply) {
        await todoService.deleteTodo(req.params.id);
        reply.code(204).send();
    }
}
module.exports = new TodoController();