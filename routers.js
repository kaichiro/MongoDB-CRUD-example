const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

// router.get('/produtos/:id', (req, res) => {
//     res.json({ id: req.params.id, name: 'Caneta' })
// })

// router.get('/clientes/:id', (req, res) => {
//     res.json({ id: req.params.id, name: 'João' })
// })

router.route('/clientes')
    .get(function(req, res) {
        res.send('Lista de Clientes')
    })
    .post((req, res) => res.send('Novo Cliente'))
    .put((req, res) => res.send('Altera Cliente'))
    .delete((req, res) => res.send('Remove Cliente'))

module.exports = router