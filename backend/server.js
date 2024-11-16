
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql2');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shahzad123@",
    database: "contact_manage",
    
});


db.connect((err) => {
    if (err) {
        console.error("Database connection error: ", err.stack);
        return;
    }
    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM contact";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Error fetching data", details: err });
        }
        return res.json(data);
    });
});

app.post("/create", (req, res) => {
    console.log("Incoming request body:", req.body);
    const sql = "INSERT INTO contact (`first`, `last`, `email`, `phone`, `company`, `job`) VALUES (?)";
    const values = [
        req.body.first,
        req.body.last,
        req.body.email,
        req.body.phone,
        req.body.company,
        req.body.job // Ensure proper casing
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data", details: err });
        }
        return res.json(data);
    });
});

app.put("/update/:id", (req, res) => {
    console.log("Incoming request body:", req.body);
    const sql = "UPDATE contact SET `first`=?, `last`=?, `email`=?, `phone`=?, `company`=?, `job`=? where `id`=?";
    const values = [
        req.body.first,
        req.body.last,
        req.body.email,
        req.body.phone,
        req.body.company,
        req.body.job 
    ];

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data", details: err });
        }
        return res.json(data);
    });
});

app.delete("/contact/:id", (req, res) => {
    console.log("Incoming request body:", req.body);
    const sql = "DELETE FROM contact  where `id`=?";
    

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data", details: err });
        }
        return res.json(data);
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
