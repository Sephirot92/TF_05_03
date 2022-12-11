const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5600;

app.post('/calculateAdd', cors(), (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log("Adding started");
    if(!Number.isInteger(Number(request.body.numberA)) || !Number.isInteger(Number(request.body.numberB))) {
        response.json({message: 'Błąd danych. Try again'});
    }
    response.json({ result: Number(request.body.numberA) + Number(request.body.numberB) });
})

app.post('/calculateSubstract', cors(), (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log("substraction started");
    if(!Number.isInteger(Number(request.body.numberA)) || !Number.isInteger(Number(request.body.numberB))) {
        response.json({message: 'Błąd danych. Try again'});
    }
    response.json({ result: Number(request.body.numberA) - Number(request.body.numberB) });
})

app.post('/multiply', cors(), (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log("Multiplication started");
    if(!Number.isInteger(Number(request.body.numberA)) || !Number.isInteger(Number(request.body.numberB))) {
        response.json({message: 'Błąd danych. Try again'});
    }
    response.json({ result: Number(request.body.numberA) * Number(request.body.numberB) });
})

app.post('/divide', cors(), (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log("Dividing started");
    if(!Number.isInteger(Number(request.body.numberA)) || !Number.isInteger(Number(request.body.numberB))) {
        response.json({message: 'Błąd danych. Try again'});
    }
    response.json({ result: Number(request.body.numberA) / Number(request.body.numberB) });
})

app.post('/power', cors(), (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log("Power started");
    if(!Number.isInteger(Number(request.body.numberA)) || !Number.isInteger(Number(request.body.numberB))) {
        response.json({message: 'Błąd danych. Try again'});
    }
    response.json({ result: Math.pow(Number(request.body.numberA), Number(request.body.numberB)) });
})

app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));