const express = require('express') //commonJS Import older version
// import express from 'express'//ES Module Import add "type": "module" in package.json
const AppRouter = require('./src/routes')
const app = express()
app.use(express.json())

app.use('/',AppRouter )



app.listen(8000,()=>console.log("Server listening to port 8000"))