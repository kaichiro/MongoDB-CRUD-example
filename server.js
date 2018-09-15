const express = require('express')
const server = express()
const router = require('./routers')

server.use('/api', router)

server.listen(3000, () => console.log('Executando em http://localhost:3000'))