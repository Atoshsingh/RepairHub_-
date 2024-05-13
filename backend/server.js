require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
// const loginSchema = require("./models/loginSchema");
const loginSchema = require('./models/loginSchema');
const router = require("./routes/accountRoute");
app.use("/user", router);

mongoose.connect(process.env.MONGO_URL + "/Repair").then(() => {
    console.log("database connected.. ");
}).catch((error) => {
    console.log(error);
})


app.get('/', (req, res) => {
    res.json({ name: 'Aashutosh Singh' })
})

//login
// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body);
//     const lSchema = await loginSchema.create({ email, password });

//     if (lSchema) {
//         res.status(200).json(lSchema);
//     }
//     else {
//         res.status(400).json({ error: "Somthing went wrong.. " });
//     }

// })

//Signup
// app.post("/signup", (req, res) => {
//     console.log("Signup Called!")
//     console.log(req.body);
//     res.status(200).json(req.body)
// })

app.listen(process.env.PORT, (e) => {
    if (e)
        console.log("Error while starting the server ");
    else {
        console.log("Server has been started on ", process.env.PORT);
    }
})
