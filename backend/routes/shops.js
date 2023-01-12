const express = require('express');
const router = express.Router();

const shopsCtrl = require('../controllers/shops')
//get /api/shops/
router.get('/', shopsCtrl.index);


router.get('/category/:id', shopsCtrl.category);
router.get('/:id', shopsCtrl.show);

router.post('/new', shopsCtrl.newShop);

router.put('/review/:id', shopsCtrl.addReview);
router.put('/:id',shopsCtrl.updateShop);


module.exports = router;
