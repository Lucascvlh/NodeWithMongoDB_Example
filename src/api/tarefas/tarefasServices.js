//vamos definir as operações que a api vai realizar
//importa o esquema da tarefa
const Tarefa = require('./tarefas');

//defini os métodos
Tarefa.methods(['get','post', 'put', 'delete']);

//definir as opções quando faz update
Tarefa.updateOptions({new:true, runValidators:true})

//exporta para ser usada em outro arquivo
module.exports = Tarefa