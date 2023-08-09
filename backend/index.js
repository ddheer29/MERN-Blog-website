const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);

const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, "images"); },
    filename: (req, file, cb) => { cb(null, req.body.name); }
});

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);

app.listen("8000", () => {
    console.log(`Server running at port 8000`);
});