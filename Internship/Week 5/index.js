const express = require('express');
const app = express();
const {User} = require('./db/db');
app.use(express.json());

app.get('/', (req, res)=> {
    res.send("Hello World");
})

app.get('/read', async (req, res)=> {
    const id = req.query.id;
    console.log(id);
    const data = await User.findById(id);
    if(!data){
        res.status(404).send({
            message:`Error is found ${e}`,
        })
    }

    try{
        console.log(`
            correct credencitals ${data}
        `)
        res.status(200).send(`
            <div>Name: ${data.name}</div>
            <div>Email: ${data.email}</div>`
        )
    }
    catch(e){
        res.status(404).send({
            message:`Error is found ${e}`,
        })
    }
})

app.post('/create', async (req, res) => {
    try{
        const data = new User(req.body);
        const response = await data.save()
        if(!response){
            res.status(404).send({
                message:`Error is found`,
            })  
        }
        console.log(data);
        res.status(200).send({
            message:"Successfully Data Inserted",
        })
    }
    catch(e){
        res.status(404).send({
            message:`Error is found ${e}`,
        })
    }
})

app.put('/update', async(req, res) => {
    try{
        const id = req.query.id;
        const data = req.body;
        const response = await User.findByIdAndUpdate(id, data);
        if(!response){
            res.status(404).send({
                message:`Error is found`,
            })    
        }
        res.status(200).send({
            message:`Data updated Successfully`,
        })
    }
    catch(e){
        res.status(404).send({
            message:`Error is found ${e}`,
        })
    }
})

app.delete('/delete', async(req, res) => {
    try{
        const id = req.query.id;
        const response = await User.findByIdAndDelete(id);
        if(!response){
            res.status(400).send({
                message:`Data is not able to delete`,
            })
        }
        res.status(200).send({
            message:`Data Deleted Successfully`,
        })
    }
    catch(e){
        res.status(404).send({
            message:`Error is found ${e}`,
        })
    }
})

app.listen(3000);