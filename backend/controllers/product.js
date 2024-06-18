const mongoose=require("express")
const Product=require("../models/Product")


const ProductAdd=async (req,res)=>{
    try {
        const {name,description,price,quantity,category}=req.body
        const product = new Product({
            name,
            description,
            price,
            quantity,
            category,
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log("Error adding product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const ProductGet=async(req,res)=>{
    try {
        const ProductList= await Product.find()
        res.status(200).json({"products":ProductList})
    } catch (err) {
        console.log("error getting products",err)
        res.status(404).json({messsae:"error getting products",error:err})
    }
}

const ProductSearch = async (req, res) => {
    try {
        const { name } = req.query; 
        if (!name) {
            return res.status(400).json({ message: "Name query parameter is required" });
        }

        const regex = new RegExp(name, 'i'); 
        const products = await Product.find({ name: { $regex: regex } });

        res.status(200).json({ "products": products });
    } catch (error) {
        console.log("Error searching products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



module.exports={
    ProductAdd,
    ProductGet,
    ProductSearch
}










