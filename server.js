import express from 'express'
import 'dotenv/config'
import cors from 'cors'

// ! Constantes/Variables
const app = express()
const PORT = process.env.PORT
const ORIGEN = process.env.ORIGEN

// ! Middleware
app.use(express.static('./public'))

const corsOptions = {
    origin: ORIGEN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions)) // Todos los diferentes origenes que quieran hacer una petición a este servidor van a poder obtener los recursos

// ! Rutas
app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/productos', (req, res) => {

    const productos = [
        {
          id: 1,
          nombre: "Camiseta",
          precio: 25.99,
          categoria: "Ropa",
          color: "Rojo"
        },
        {
          id: 2,
          nombre: "Teléfono",
          precio: 699.99,
          categoria: "Electrónica",
          color: "Negro"
        },
        {
          id: 3,
          nombre: "Laptop",
          precio: 1299.99,
          categoria: "Electrónica",
          color: "Gris"
        },
        {
          id: 4,
          nombre: "Libro",
          precio: 12.99,
          categoria: "Libros",
          color: "Azul"
        },
        {
          id: 5,
          nombre: "Zapatos",
          precio: 79.99,
          categoria: "Ropa",
          color: "Blanco"
        }
    ]

    res.json(productos)
})

// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error(`No se pudo levantar el servidor -> ${err}`)
    console.log(`Aplicación arrancó -> http://localhost:${PORT}`)
})