const app = require("teem");
const dotenv = require("dotenv");

dotenv.config({ encoding: "utf8", path: app.currentDirectoryName() + "/../.env" });

const PORT = process.env.PORT || 3000; 

app.run({
	// Configurações de acesso ao banco de dados.
	sqlConfig: {
		connectionLimit: 30,
		waitForConnections: true,
		charset: "utf8mb4",
		host: process.env.postgrehost,
		port: parseInt(process.env.postgreport),
		user: process.env.postgreuser,
		password: process.env.postgrepassword,
		database: process.env.postgredatabase,
		connectTimeout: 10000 // Tempo limite de conexão em milissegundos (aumente se necessário)
	},
	port: PORT
});


console.log(`O servidor está rodando na porta http://localhost:${PORT}`);