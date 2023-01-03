const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connection = require("./database/db.js");
const product_list = require("./product_list.js");
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'https://laundry-frontend-ggle.onrender.com',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/api/v1/order', require('./routes/orderRoute'));
app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/product', require('./routes/productRoute'));

connection();

app.listen(PORT, () => console.log("server is running on port", PORT));

product_list();
