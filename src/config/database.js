const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://sohamtesting2:DOvQce1Fx5U8cfhB@namastedev.orxtkji.mongodb.net/devTinderDB"
    )
}

module.exports = {
    connectDB
}