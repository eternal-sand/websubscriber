
const Router = require('koa-router')

let router = new Router()

const home = require('./home');

router.use('/', home.routes(), home.allowedMethods())

module.exports =router