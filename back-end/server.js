const app = require('./app.js');
require('dotenv').config;

const host = process.env.HOST_URL ||  "127.0.0.1";
const port = process.env.PORT_NO || 3000;


const server = app.listen(port, host, () => {
    console.log(host);
    console.log(`Succsfully server running on port no : ${server.address().port}`)
})