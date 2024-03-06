import app = require("teem");
import axios from 'axios';
    import { Request, Response } from 'express';

class LivroRoute {

    public async listarProduto(req: app.Request, res: app.Response) {
        try {
            const response = await axios.get('http://localhost:8080/produto');
            const produtoData = response.data;

            console.log(produtoData); 

            res.render("index/listar", {
                produtoData: produtoData
            });
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    
    public async criarProduto(req: app.Request, res: app.Response) {
		res.render("index/criar");
	}

    public async signUp(req: app.Request, res: app.Response) {
		res.render("index/signUp");
	}

    public async signIn(req: app.Request, res: app.Response) {
		res.render("index/signIn");
	}

    public async editarProduto(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.query.id as string);
            const valoresLivro = await this.obterValoresLivro(id); 
            res.render("index/editar", { id: id, valoresLivro: valoresLivro }); 
            } catch (error) {
            console.error('Erro ao renderizar página de edição:', error);
            res.status(500).send('Erro ao renderizar página de edição'); 
        }
    }

    private async obterValoresLivro(id: number): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:8080/produto?id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter valores do livro:', error);
            throw error; 
        }
    }
}

export = LivroRoute;
