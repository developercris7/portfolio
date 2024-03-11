const express = require('express')
const app = express()
const PORT = 1500 ;
const mailRouter = require('./routes/sendmail')
app.use(express.json())
app.use('/home',mailRouter)

app.listen(PORT,()=> {
    console.log("Server is running on PORT " + PORT);
})