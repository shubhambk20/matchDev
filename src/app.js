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