const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 6053;


app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));