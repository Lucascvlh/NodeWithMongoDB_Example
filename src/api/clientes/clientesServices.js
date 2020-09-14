//vamos definir as operações que a api vai realizar
//importa o esquema da tarefa
const Cliente = require('./clientes');

//defini os métodos
Cliente.methods(['get','post', 'put', 'delete']);

//definir as opções quando faz update
Cliente.updateOptions({new:true, runValidators:true})

//exporta para ser usada em outro arquivo
module.exports = Cliente