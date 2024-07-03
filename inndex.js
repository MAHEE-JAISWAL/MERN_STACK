//Express.js
import express from "express";
import mongoose from "mongoose"
const app = express();

const port = 3000; // to run something w need port

app.use(express.json())

app.get('/api/get-message', (req,res) => {
    res.json({message : "Mahee Jaiswal"});
})

app.listen(port, () => {
    console.log("Server is running on port",port)
})

const mongoUrl = "mongodb+srv://harshalhonde17:harshal172003@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority"

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error("Error is", err)
})

//mongodb+srv://harshalhonde17:harshal172003@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority
