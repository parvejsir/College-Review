import express from 'express'

const app = express();

const PORT = 5001;

app.get('/',(req,res)=>{
    res.send("Hello Vyom");
})

app.listen(PORT,()=>{
    console.log(`App started at port ${PORT}`);
})