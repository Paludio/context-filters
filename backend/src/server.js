require('dotenv').config();

const app = require ('./app');

app.listen(process.env.API_PORT, () => console.log(`Rodando na porta ${process.env.API_PORT}`));
