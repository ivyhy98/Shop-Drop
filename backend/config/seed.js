require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Shop = require('../models/shops');

( async function (){
    await Category.deleteMany({});
    const categories = await Category.create([
      { name: "Jewelry" },
      { name: "Beauty" },
      { name: "Apparel" },
      { name: "Women's Apparel" },
      { name: "Accesories"},
      { name: "Services" },
    ]);

    await Shop.deleteMany({});
    const shops = await Shop.create([
      {
        name: "Val's Crystalnique",
        information: "Metaphysical Shop. This Company's owner is Valencia Gooden and she sells merchandise such as jewelry, crystal's, and different supplies ",
        category: categories[0],
        image: "https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "http://www.valscrystalnique.com",
        pocOwned: true,
        reviews: [
          {
            comment: "I always love shopping with Lady",
            rating: 5,
          },
          {
            comment: "I love the energy I always feel after her healing sessions",
            rating: 4,
          },
        ],
        
        location: { city: "Cincinnati", state: "Ohio" },
      },
    ]);

    console.log(shops);
    process.exit();

})();
