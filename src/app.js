const express = require('express')
const app = express() 
const port = 3000

// query params 
app.get('/user/:userId/:name/:password', (req, res) => {
    console.log(req.params)
    res.send("User added successfully.")
})

// http://localhost:3000/user/101/Omkar/pass123

// [Object: null prototype] {
//   userId: '101',
//   name: 'Aanad',
//   password: 'pass123'
// }

// dynamic routing
app.get('/user', (req, res) => {
    console.log(req.query)
    res.send({name: req.query.name, password: req.query.password})
})

// http://localhost:3000/user?userId=101&name=Omkar&password=pass123

// [Object: null prototype] {
//   userId: '101',
//   name: 'Omkar',
//   password: 'pass123'
// }

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("testing the routes")
})

app.listen(port, (req, res) => {
    console.log(`App listending on ${port}`)
});