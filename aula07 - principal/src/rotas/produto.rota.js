 const express = require('express')
const router = express.Router()
const produtoMid = require('../middleware/validarProduto.middleware')
const { Produto, Usuario } = require('../db/models')

router.post('/', produtoMid)
router.put('/', produtoMid)

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll()
    res.json({ produtos: Object.values(produtos) })
})

router.get('/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id, 
        {include: [{model: Usuario}], raw: true, nest: true})

    const prodProcessado = prepararResultado(produto)

    res.json({ produtos: prodProcessado })
})

router.post('/', async (req, res) => {
    const produto = await Produto.create(req.body)
    res.json({ msg: "Produto adicionado com sucesso!" })
})

router.delete('/', async (req, res) => {
    const id = req.query.id
    const produto = await Produto.findByPk(id)
    if (produto) {
        await produto.destroy()
        res.json({ msg: "Produto deletado com sucesso!" })
    } else {
        res.status(400).json({ msg: "Produto não encontrado!" })
    }

})

router.put('/', async (req, res) => {

    const id = req.query.id
    const produto = await Produto.findByPk(id)

    if(produto){
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.preco = req.body.preco
        await produto.save()
        res.json({ msg: "Produto atualizado com sucesso!" })
    }else{
        res.status(400).json({ msg: "Produto não encontrado!" })
    }

})

function prepararResultado(produto) {
    const result = Object.assign({}, produto)

    if(result.createdAt) delete result.createdAt
    if(result.updateAt) delete result.updatedAt
    if(result.userId) delete result.userId
    if(result.Usuario){
    if(result.Usuario.senha) delete result.Usuario.senha
    }
    return result
}

module.exports = router



