const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/testdb");

const User = mongoose.model("User", { name: String });

app.post("/api", async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();

    res.json({ message: "U ruajt ne MongoDB ✔" });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});