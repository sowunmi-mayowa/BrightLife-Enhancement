require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({message : "welcome"}));
app.use('/api', require("./routes/server"))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const server = app.listen(process.env.PORT || 5000, () => {
            const port = server.address().port;
            console.log(`express is running on port ${port}`)
        })
    })
    .catch(error => {
        console.log(error)
    })

