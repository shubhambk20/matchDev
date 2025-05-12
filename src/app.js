const express = require('express')
const app = express() 
const port = 3000

app.use("/home", (req, res) => {
    res.send("This is sweet home...")
})

app.use("/hello", (req, res) => {
    res.send("Hello, Who's there :-O");
})

app.use((req, res) => {
    res.send("This is a wildcard route ...")
})

app.listen(port, (req, res) => {
    console.log(`App listending on ${port}`)
});