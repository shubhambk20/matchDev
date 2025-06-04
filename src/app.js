const express = require('express')
const app = express() 
const port = 3000
const { connectDB } = require("./config/database")
const User = require("./models/user")

app.use(express.json())

app.post("/signup", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.send("User saved successfully.")
    } catch (error) {
        res.status(400).send("Error saving the user: " + error.message)
    }
})

// Get User by email 
app.get('/user', async (req, res) => {
    const emailId = req.body.emailId 

    try {
        const user = await User.findOne()

        if (!user) {
            res.status(404).send("User not found.")
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(400).send("Something went wrong.")
    }
})

// Feed API - get the all the users from database
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(Error) {
        res.status(400).send("Something went wrong.")
    }
})

connectDB()
    .then(() => {
        console.log("Database connection established...");

        app.listen(port, () => {
            console.log("Server listening on Port", port);
        })
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error)
    })