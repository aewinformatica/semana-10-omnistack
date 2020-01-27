// importando o express
const express = require('express');

const app = express();

// rota raiz e segundo parametro uma funcao arrow function = parentesis flecha e chaves
app.get('/', (request,response) => {

    // retornando resposta em Json
    return response.json({ message : 'Hello Aew'});

});

// porta
app.listen(3333);