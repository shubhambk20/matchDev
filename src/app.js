const express = require('express')
const app = express() 
const port = 3000

// This will only handale get call to /user
app.get('/user', (req, res) => {
    res.send({"firstname": "Raj", "lastname": "Kumar"})
})

app.post('/user', (req, res) => {
    // Saving data to DB logic here 
    res.send("Data successfully saved to DB.")
})

app.delete('/user', (req, res) => {
    // Deleting data logic here 
    res.send("Deleted successfully.")
})

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("testing the routes")
})

app.listen(port, (req, res) => {
    console.log(`App listending on ${port}`)
});