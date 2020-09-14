const restful = require('node-restful')
const mongoose = restful.mongoose

const ClienteSchema = new mongoose.Schema({
  nome: {type:String, require:true},
  cpf: {type:Number, require:true},
  rg: {type:Number, require:true},
})

module.exports = restful.model('Cliente', ClienteSchema)