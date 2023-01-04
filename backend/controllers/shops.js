const e = require('express');
const Shop = require ('../models/shops');
const Category = require('../models/category')

module.exports = {
    index,
    category,
    show,
    location,
};

async function index(req,res){
    try{
        const shops = await Shop.find({}).sort({createdAt: 'desc'});
        const categories = await Category.find({});
        res.status(200).json({shops, categories});
    }catch(err){
        res.status(400).json({msg: err.message});
    }
}

async function category(req,res){
    try{
        const shops = await Shop.find({'category': req.params.id});
        
        res.status(200).json(shops)
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

async function show(req,res){
    try{
        const shop = await Shop.findById(req.params.id);
        res.status(200).json(shop);
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}


