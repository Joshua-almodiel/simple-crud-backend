// Brain of the backend
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('JOSHUA ALMODIEL  BSIT - 2/ SEC - 2')
})




mongoose.connect("mongodb+srv://joshuaalmodiel1133333:zUL85OjTyP0rQlV9@mycruddb.06qfs.mongodb.net/?retryWrites=true&w=majority&appName=myCruddb")
.then(() => {
    console.log("Connect success...");
    app.listen(3000, () => {
        console.log('The server is running in API...');
    });
})
.catch(() => {
    console.log("Connect failed...");
});