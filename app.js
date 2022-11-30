const express = require('express')
const Customer = require('./routes/Customer')
const cors=require('cors');

const app = express();
const port = 4000

app.use(express.json())
app.use(cors())

app.use('/customer',Customer)


app.listen(port, (req,res) => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

