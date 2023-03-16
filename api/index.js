const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { connectToDb, getDb } = require('./db')

// Conexion a la base de datos
let db
connectToDb((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`estoy ejecutandome en el puerto http://localhost:${port}`)
        })
        db = getDb()
    }
})

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json({
        type: "*/*"
    })
)

app.use(cors())



app.post('/informacion', (req, res) => {
    console.log(req.body)
    const info_persona = req.body
    db.collection('personas_form')
        .insertOne(info_persona)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'No se pudo crear un nuevo documento' })
        })
}
)

