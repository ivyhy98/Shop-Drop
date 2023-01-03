require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Shop = require('../models/shops');

(async function (){
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
        information:
          "Metaphysical Shop. This Company's owner is Valencia Gooden and she sells merchandise such as jewelry, crystal's, and different supplies ",
        category: categories[0],
        image:
          "https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "http://www.valscrystalnique.com",
        pocOwned: true,
        user: "Valencia Gooden",
        location: { city: "Cincinnati", state: "Ohio" },
      },
      {
        name: "J.Lyshe",
        information:
          "Luxury Sunglass Line Style your favorite look today with one of our high quality frames paired with your perfect Luxe lifestyle",
        category: categories[4],
        image:
          "https://cdn.shopify.com/s/files/1/0629/5745/3537/files/123396616_356964588864644_3120517979570528007_n_39c02d19-36f0-4553-a871-8828a1d8af7e_949x.jpg?v=1649340962",
        link: "http://www.jlyshe.com",
        pocOwned: true,
        user: "Jada Lyshe",
        location: { city: "Cincinnati", state: "Ohio" },
      },
      {
        name: "Coppewlry",
        information: "Copper Handcrafted Jewelry",
        category: categories[0],
        image:
          "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/311818045_160805986561915_8322665845310525322_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uxS3ZP-Th2oAX_EKFwf&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAFrcSgFqau_X1xCsUlNANwxrnwmBHYRrSw6BEm7UyhvA&oe=63B7B3DE",
        link: "https://www.facebook.com/profile.php?id=100078975439885",
        pocOwned: true,
        user: "R.L Bey",
        location: { city: "Cincinnati", state: "Ohio" },
      },
    ]);
    console.log(shops);
    process.exit();

})();
