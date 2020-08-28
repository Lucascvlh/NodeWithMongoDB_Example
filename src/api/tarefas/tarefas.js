const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefaSchema = new mongoose.Schema({
  descricao: {type:String, require:true},
  realizada: {type:Boolean, require:true, default:false},
  criadaQuando: {type:Date, default: Date.now},
  quem:{type:String, required:true},
  onde:{type:String, required:true},
  prioridade:{type:Number, required:true}
})

module.exports = restful.model('Tarefa', tarefaSchema)