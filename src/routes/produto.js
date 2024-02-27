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
    // public async deletarProduto(req: Request, res: Response): Promise<void> {
    //     try {
    //         const id: number = parseInt(req.query.id as string); 
    //         const response = await axios.delete(`http://localhost:8080/produto/${id}`);
    //         if (response.status === 200) {
    //             res.status(200).send('Produto excluído com sucesso');
    //         } else {
    //             res.status(response.status).send('Erro ao excluir produto');
    //         }
    //     } catch (error) {
    //         console.error('Erro ao excluir produto:', error);
    //         res.status(500).send('Erro ao excluir produto');
    //     }
    // }
    // public async deletarProduto(req: app.Request, res: app.Response) {
    //     try {
    //         const response = await axios.delete('http://localhost:8080/produto');
    //         const produtoData = response.data;
    //         console.log(produtoData); 
    //     } catch (error) {
    //         console.error('Erro ao obter produtos:', error);
    //         res.status(500).send('Erro interno do servidor');
    //     }
    // };
    async deletarProduto(req, res) {
        try {
            const id = parseInt(req.params.id); // Obter o ID do produto da URL
            // Aqui você executa a lógica para excluir o produto com o ID fornecido
            // Substitua esta linha pela lógica real para excluir o produto do seu banco de dados ou armazenamento
            console.log(`Excluindo produto com ID ${id}`);
            // Envie uma resposta de sucesso ao cliente
            res.status(200).send('Produto excluído com sucesso');
        }
        catch (error) {
            // Manipule o erro aqui, se necessário
            console.error('Erro ao excluir produto:', error);
            res.status(500).send('Erro ao excluir produto');
        }
    }
}
module.exports = LivroRoute;
//# sourceMappingURL=produto.js.map