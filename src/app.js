const express = require('express')
const app = express()

app.use(express.json())

let notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: 'Successful post'
    })
})

app.get('/notes', (req, res) => {

    res.status(200).json({
        message: 'get message successful',
        notes: notes
    })
})

app.delete('/notes/:index', (req, res) => {
    let index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: 'successful delete'
    })

})

app.patch('/notes/:index', (req, res) => {
    let index = req.params.index
    let description = req.body.description
    notes[index].description = description

    res.status(200).json({
        message: 'Successfull edit '
    })
})


module.exports = app