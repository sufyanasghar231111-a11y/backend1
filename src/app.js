const express=require('express')
const app=express()
let notes=[]
app.use(express.json())

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:'post message successful'
    })
    
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:'get message Successful',
        notes:notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    let index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:'delete Successful'
    })

})

module.exports=app