//importa o express pois as rotas são definidas no servidor web
const express = require('express')

//programação funcional
module.exports = function(server){//o parametro representa o servidor
  //cria um objeto de roteamento de rotas
  const router = express.Router()

  //o servidor web vai rotear a partir da rota /api
  server.use('/api', router)

  //rota especifíca para a tarefa
  const tarefaServices = require('../api/tarefas/tarefasServices')

  //registra a rota de tarefas
  tarefaServices.register(router, '/tarefas')
}