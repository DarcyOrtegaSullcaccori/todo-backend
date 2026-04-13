require('dotenv').config();
const Fastify = require('fastify');
const mongoose = require('mongoose');

const fastify = Fastify({ logger: true });

// Conexión a Base de Datos de MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a BD:', err));

// Registramos el archivo de rutas externalizado
fastify.register(require('./src/routes/todo.routes'), { prefix: '/api/todos' });

const start = async () => {
    try { await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' }); } 
    catch (err) { fastify.log.error(err); process.exit(1); }
};
start();