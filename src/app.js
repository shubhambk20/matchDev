const express = require('express')
const app = express() 
const port = 3000

app.use('/getUserData', (req, res) => {
    // Logic of DB and get user data 
    throw new Error("Code Breaks...")

    res.send("User data sent")
})

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong")
    }
})

app.listen(port, (req, res) => {
    console.log(`App listending on ${port}`)
});