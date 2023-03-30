const express = require('express')

const port = 3000
const app = express()

//carga de archivos estáticos (css)
app.use(express.static('static'))

//index.html
app.get('/',(req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

//404 error
app.use((req, res) => {
    res.status(404).send('Página no encontrada 🤔')
})

app.listen(port)
console.log(`Server on port ${port}`)