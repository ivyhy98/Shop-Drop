const e = require('express');
const Shop = require ('../models/shops');
const Category = require('../models/category')

module.exports = {
    index,
    category,
    show,
    newShop,
    updateShop,
    addReview,
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
        const category = await Category.findById(req.params.id);
        
        res.status(200).json({shops, category});
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

async function show(req,res){
    try{
        const shop = await Shop.findById(req.params.id);
        res.status(200).json(shop);
    }catch(err){
        res.status(400).json({msg: err.message});
    }
}

async function newShop(req,res){
    try{
        const shop = await Shop.create(req.body)
        const user = await User.findOneAndUpdate(req.body.user, {shopsCreated: [shop]});
        res.status(200).json(shop);
    }catch(err){
        res.status(400).json({msg: err.message});
    }
};

async function updateShop(req,res){
    try{
        const shop = await Shop.findOneAndUpdate(req.params.id, req.body);
        res.status(200).json(shop);
    }catch(err){
        res.status(400).json({msg: err.message});
    }
};

async function addReview(req,res){
    try{
        const shop = await Shop.addReview(req.id, req.body.review)
        await shop.save();
        res.status(200).json(shop);
    }catch(err){
        res.status(400).json({msg: err.message});
    }
}


