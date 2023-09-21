const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const produtoMid = require('../middleware/validarProduto.middleware')

const produtos = {}

router.post('/', produtoMid)
router.put('/', produtoMid)

router.get('/', (req, res) => {
    res.json({ produtos: Object.values(produtos) })
})

router.get('/:id', (req, res) => {
    res.json({ produto: produtos[req.params.id] })
})

router.post('/', (req, res) => {
    const produto = req.body
    const id = uuidv4()
    produto.id = id
    produtos[id] = produto
    res.json({ msg: "Produto adicionado com sucesso!" })
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]) {
        const produto = req.body
        produto.id = id
        produtos[id] = produto
        res.json({ msg: "Produto atualizado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Produto não encontrado!" })
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]) {
        delete produtos[id]
        res.json({ msg: "Produto deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Produto não encontrado!" })
    }
})

module.exports = router