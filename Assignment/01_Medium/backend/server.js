const express = require("express");
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const multer = require("multer");

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Setup multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}`);
    }
});
const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use('/api/register', require("./routes/userRoutes"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/home', (req, res) => {
    res.render("home", {
        title: "Dynamic Home Page",
        message: "Welcome to the dynamic home page!",
        user: {
            name: "Pranav Gupta",
            age: 21
        }
    });
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        type: String,
        default: ""
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User2',
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User2',
    }]
}, { timestamps: true });

const Users1 = mongoose.model('User1', userSchema);

// Signup Endpoint
app.post('/signup', async (req, res) => {
    try {
        let check = await Users1.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({
                success: false,
                error: "Existing user found with the same email address"
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new Users1({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,  // Save hashed password
        });
        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom', { expiresIn: '24h' });
        res.json({
            success: true,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    try {
        // Select password field explicitly because it's excluded by default
        let user = await Users1.findOne({ email: req.body.email }).select("+password");

        if (user) {
            // Compare the hashed password with the one in the request
            let passComp = await bcrypt.compare(req.body.password, user.password);
            if (passComp) {
                const data = {
                    user: {
                        id: user.id
                    }
                };
                const token = jwt.sign(data, 'secret_ecom', { expiresIn: '24h' });
                res.json({
                    success: true,
                    token,
                });
            } else {
                res.status(400).json({ success: false, error: "Wrong Password" });
            }
        } else {
            res.status(400).json({ success: false, error: "Wrong email address" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
});


app.get('/allusers', (req, res) => {
    const users = [
        { name: "Pranav Gupta", age: 21, email: "Pranav@example.com", role: "Admin" },
        { name: "Jane Smith", age: 25, email: "janesmith@example.com", role: "User" },
        { name: "Alice Johnson", age: 28, email: "alicejohnson@example.com", role: "Moderator" }
    ];
    res.render('users', { users });
});

// Single and multiple file upload handling on `/profile` route
app.post("/profile", (req, res, next) => {
    upload.single("avatar")(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(500).send(err.message);
        } else if (err) {
            return res.status(500).send("Unexpected error");
        }
        
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }
        
        const imageUrl = `/uploads/${req.file.filename}`;
        return res.render("home", { imageUrl });
    });
});

app.post("/profiles", upload.array("avatars", 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send("No files uploaded.");
    }

    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    res.render("home", {
        username: req.body.username || "Pranav Gupta",
        imageUrls: imageUrls
    });
});

app.get("/", (req, res) => {
    const users = [
        { name: "Pranav Gupta", age: 21, email: "Pranav@example.com", role: "Admin" }
    ];
    res.render("users", { users });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
