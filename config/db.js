const mongoose = require("mongoose");
const colors = require("colors");

const connectedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MonogoDB:${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`Error:${error}`.bgRed.white);
    }

}
module.exports = connectedDB;