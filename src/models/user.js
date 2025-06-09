const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    "firstName": {
        type: String,
        required: true,
        minLength: 4,
        maxLenght: 50
    },
    "lastName": {
        type: String,
    },
    "emailId": {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    "password": {
        type: String,
        required: true,
    },
    "age": {
        type: Number,
    }, 
    "gender": {
        type: String,
        lowercase: true,
        validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Gender data is not valid.")
            }
        }
    },
    photoUrl: {
        type: "string",
        default: "https://geographyandyou.com/images/user-profile.png",
    },
    about: {
        type: "string",
        default: "This is a default about of the user!",
    },
    skills: {
      type: [String],
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)