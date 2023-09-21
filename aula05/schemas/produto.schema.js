module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        descricao: {type: "string"},
        preco: {type: "integer"}
    },
    required: ["nome", "preco"],
    additionalProperties: false
}