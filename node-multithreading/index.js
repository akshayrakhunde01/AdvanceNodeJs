import express from 'express'
import {Worker} from 'worker_threads'
const app =express()

const port =4000;

app.get('/non-blocking',(req,res)=>{
    res.status(200).send('this app is non blocking')
})

app.get('/blocking',(req,res)=>{

    const worker =new Worker('./worker.js');
    worker.on('message',(data)=>{
        res.status(200).send(` counter is ${data}`)
    })

    worker.on('error',()=>{
        res.status(200).send(` error occured in ${data}`)
    })

    
  
})





app.listen(port,()=>{
    console.log(`app is listing on port: http://localhost:${port}`)
})