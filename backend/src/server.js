require('dotenv').config();

const app = require ('./app');

app.listen(3001, () => console.log(`Rodando na porta ${process.env.API_PORT}`));