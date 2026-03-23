const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const SECRET_KEY = "mytestkey";

let users = [];

/* Middleware for authentication */

function authenticateToken(req, res, next) {

    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "JWT authentication failed" });
    }
}

/* Test route */

app.get("/test", (req, res) => {
    res.send("API test route is working");
});


/* Register user */

app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword
        };

        users.push(newUser);

        res.json({ message: "User Registered Successfully" });

    } catch (err) {

        res.status(400).json({ message: err.message });

    }
});


/* Login user */

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token: token
        });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

});


/* Get all registered users */

app.get("/users", (req, res) => {
    res.json(users);
});


/* Protected route */

app.get("/profile", authenticateToken, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});


/* Start server */

app.listen(port, () => {
    console.log("Server running at:", port);
});