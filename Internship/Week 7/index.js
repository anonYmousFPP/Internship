const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const env = require('dotenv');
env.config();
const secret_key = process.env.secret;

app.use(express.json());


app.get('/getData/:id', (req, res) => {
    const jwtString = req.params.id;
    console.log(jwtString);
    const data = jwt.decode(jwtString);
    console.log(data);
    res.send(data);
})


app.post('/signup', async (req, res) => {
    const data = req.body;
    const response = await jwt.sign(data, secret_key)
    console.log(response);
    res.send(response);
})


app.post('/verify', (req, res) => {
    try{
        const data = req.header('authorization') || "";
        const response = jwt.verify(data, secret_key);
        if(!response){
            res.status(400).send({
                message: `Error is found ${e}`
            })
        }
        console.log(response);
        res.status(200).send({
            message: response,
        });
    }
    catch(e){
        res.status(400).send({
            message: `Error is found ${e}`
        })
    }
})

app.listen(3000);