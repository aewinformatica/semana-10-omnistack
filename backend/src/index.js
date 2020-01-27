// importando o express
const express = require('express');

const app = express();

// rota raiz e segundo parametro uma funcao arrow function = parentesis flecha e chaves
app.get('/', (request,response) => {

    return response.send('Hello world');

});

// porta
app.listen(3333);