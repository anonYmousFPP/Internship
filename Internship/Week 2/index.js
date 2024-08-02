const { error } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();

let data;

//reading a file
fs.readFile('./temp.txt', 'utf-8', (req, res, error) => {
    if(error){
        console.log(error);
    }
    else{
        data = res;
        console.log(data);
    }
})

// creating a new file
const myNewData = 'Hello my name is abhay yadav'
fs.writeFile('temp2.txt', myNewData, 'utf-8', (req, res, error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log('My new data file is created');
    }
})

// deleting a file
fs.unlink('./temp2.txt', (req, res, error) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log('My file is deleted');
    }
})

app.get('/', (req, res)=>{
    res.send(`My file data is ${data}`);
})

app.listen(3000);