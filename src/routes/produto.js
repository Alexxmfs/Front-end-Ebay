"use strict";
const axios_1 = require("axios");
class LivroRoute {
    async listarProduto(req, res) {
        try {
            const response = await axios_1.default.get('http://localhost:8080/produto');
            const produtoData = response.data;
            console.log(produtoData);
            res.render("index/listar", {
                produtoData: produtoData
            });
        }
        catch (error) {
            console.error('Erro ao obter produtos:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }
    ;
    async criarProduto(req, res) {
        res.render("index/criar");
    }
    async editarProduto(req, res) {
        try {
            const id = parseInt(req.query.id);
            const valoresLivro = await this.obterValoresLivro(id);
            res.render("index/editar", { id: id, valoresLivro: valoresLivro });
        }
        catch (error) {
            console.error('Erro ao renderizar página de edição:', error);
            res.status(500).send('Erro ao renderizar página de edição');
        }
    }
    async obterValoresLivro(id) {
        try {
            const response = await axios_1.default.get(`http://localhost:8080/produto?id=${id}`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao obter valores do livro:', error);
            throw error;
        }
    }
}
module.exports = LivroRoute;
//# sourceMappingURL=produto.js.map