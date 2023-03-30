const express = require('express')

const port = 3000
const app = express()

//index.html
app.get('/',(req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

//nosotros.html
app.get('/nosotros',(req, res) => {
    res.sendFile('./static/nosotros.html',{
        root: __dirname
    })

})

app.listen(port)
console.log(`Server on port ${port}`)