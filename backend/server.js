const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
var ImageKit = require("imagekit");
var fs = require('fs');
const multer = require("multer");


var imagekit = new ImageKit({
    publicKey: "public_LkIdXZtGSUjA87gX/I3Tr94519M=",
    privateKey: "private_6OTNJQSg8mI10d2UcJ65mg/Ed2E=",
    urlEndpoint: "https://ik.imagekit.io/your_imagekit_id/"
});

const app = express();

app.use(cors(
    {
        'origin': '*'
    }
));
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "store"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});



//imagekit authentication------------------

app.get('/auth', (req, res) => {
    var authenticationParameters = imagekit.getAuthenticationParameters();
    res.send(authenticationParameters);
})

const upload = multer({ dest: "uploads/" });
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Define the destination directory for uploaded files
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//       cb(null, file.fieldname + '-' + uniqueSuffix); // Define the filename for the uploaded file
//     },
//   });



//get products-------------------

app.get("/products", (req, res) => {
    db.query("SELECT * from products", (err, results) => {
        if (err) {
            res.status(500).json({ result: false, })
        } else {
            res.status(200).json({ result: true, data: results, })
        }
    })
})



//add-products-------------------

app.post("/add-products", upload.single("image"), (req, res) => {
    const { name, description, price, image } = req.body;
    const prod_image = req.file;

    // Store the ImageKit.io image URL instead of the file path
    const imageURL = req.url; // Assuming you are using multer and the file is stored in the server

    console.log(image)

    // console.log(req.body, "Image error line 55")

    const query =
        "INSERT INTO products (`product_name`, `product_description`, `product_price`, `image`) VALUES (?, ?, ?, ?)";
    db.query(
        query,
        [name, description, price, image],
        (err, results) => {
            if (err) {
                console.error("Error saving product data to MySQL:", err);
                res.status(500).send("err");
            } else {
                console.log("Product data saved to MySQL:", results);
                res.status(200).send("Success");
            }
        }
    );
});




//signup---------------------------

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO signup_info (`id`,`name`,`email`,`phone`,`password`) VALUES (null,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.password,

    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Error inserting User in DB' });
        }
        return res.json(data);
    })
})




//login-------------------------

app.post('/login', (req, res) => {

    const sql = "SELECT * FROM signup_info WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        if (data.length > 0) {
            res.status(200).json({
                result: true,
                msg: 'Login success!',
            })
            console.log("Success")
        }
        else {
            console.log("Fail")
        }
    })
})




//category---------------

app.get('/add-category', (req, res) => {
    const { cat_name } = req.query;

    // Perform the MySQL query to check if the category name already exists
    const query = 'SELECT * FROM categories WHERE category_name = ?';
    db.query(query, [cat_name], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error checking category existence' });
        }

        return res.status(200).json(results);
    });
});

app.post('/add-category', (req, res) => {
    // const data = req.body;

    // const insertQuery = "INSERT INTO categories SET ?"

    // db.query(insertQuery, data, (err, results) => {
    //     if (err) {
    //         console.error("Error ", err);
    //     }
    //     else {
    //         console.log("Added")
    //     }
    // })

    const sql = "INSERT INTO categories (`category_id`, `category_name`) VALUES (null, ?)";
    const values = [req.body.name]; // Use `category_name` instead of `cat_name`
    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while adding the category.' });
        }
        else {
            console.log("Data Inserted");
            res.status(200).send("Done");
        }
    });
});



//update profile-------------------------

app.post('/updateprofile', (req, res) => {
    // const { name, email, phone, password } = req.body;
    const formData = req.body;
    const email = formData.email;


    // // Perform validation on the data (you can add your own validation logic)
    // if (!name || !email || !phone || !password) {
    //     return res.status(400).json({ error: 'Invalid data. Please provide all required fields.' });
    // }

    // Perform database update operation
    // const query = `
    // UPDATE signup_info
    // SET name = '${name}', email = '${email}', phone = '${phone}', password = '${password}'
    // WHERE name = ? AND email = ? AND phone = ? AND password = ? `;
    // const values = [name, email, phone, password];

    const updateQuery = "UPDATE signup_info SET ? WHERE email = ?";

    db.query(updateQuery, [formData, email], (error, results) => {
        if (error) {
            console.error('Error updating user in the database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        } else {
            console.log(results);
        }

        res.status(200).json({ message: 'Profile updated successfully' });
    });
});


app.listen(8081, () => {
    console.log("listening")
})