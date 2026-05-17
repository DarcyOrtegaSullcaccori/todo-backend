const todoRepository = require('../repositories/todo.repository');

// Capa de servicio: contiene la lógica de negocio de los todos
class TodoService {
    // Retorna todos los todos almacenados
    async getAllTodos() { return await todoRepository.findAll(); }

    // Crea un nuevo todo, valida que el título no esté vacío
    async createTodo(data) {
        if(!data.title) throw new Error("El título de la tarea es obligatorio");
        return await todoRepository.create(data);
    }

    // Actualiza un todo por su id
    async updateTodo(id, data) { return await todoRepository.update(id, data); }

    // Elimina un todo por su id
    async deleteTodo(id) { return await todoRepository.delete(id); }
}
module.exports = new TodoService();