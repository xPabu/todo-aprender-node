'use strict'

const { test, trait } = use('Test/Suite')('Task')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

trait('Test/ApiClient')

test('make sure task is being created', async ({ client }) => {
  const responseCreate = await client
    .post('/task')
    .send({
      titulo: 'Teste criação de task',
      descricao: 'Este é um teste de criação de task'
    })
    .end()

  const response = await client
    .get('/task')
    .end()

    responseCreate.assertStatus(200)
    response.assertJSONSubset([{
      titulo: 'Teste criação de task',
      descricao: 'Este é um teste de criação de task'
    }])
})
