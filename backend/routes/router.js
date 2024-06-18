const express=require("express")
const {ProductAdd} =require("../controllers/product")
const {ProductGet} =require("../controllers/product")
const {ProductSearch} =require("../controllers/product")

const app = express.Router()

app.post('/products', ProductAdd);
app.get('/products', ProductGet);
app.get('/products/search', ProductSearch);


module.exports=app