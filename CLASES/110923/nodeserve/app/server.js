const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()

// const port = 3700
// app.get('/', (req, res) =>{
//     res.send('Servidor en linea por pantalla...')
// })
// app.listen(port,() =>{
//     console.log('La aplicación está en línea....')
// })
// const cursoRouters = require('./app/routes/curso')
// app.use(cursoRouters)

// Conexión con Base datos
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://127.0.0.1:27017/Appweb', {
//     useNewUrlParser: true,
// })
// .then(() => {
//     console.log("Conexión establecida...")
// })
// .catch(err => console.log(err))


// Conectamos DB Cursos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/cursos', require('./app/routes/cursoroutes'));

app.listen(3700, () => {
    console.log('El servidor esta corriendo perfectamente')
})