import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Hello There")
})

app.listen(port, (req,res) => {
    console.log(`Server started running at port ${port}`)
})