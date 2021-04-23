'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/task', 'TaskController.index')

Route.get('/task/:id', 'TaskController.show')

Route.post('/task', 'TaskController.store')

Route.put('/task/:id', 'TaskController.update')

Route.delete('/task/:id', 'TaskController.destroy')
