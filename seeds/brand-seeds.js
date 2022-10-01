const { Brand } = require('../models');

const BrandData = [
  {
    Brand_name: 'Red Heels',
    price: 54.99,
    stock: 14,
    classification_id: 1,
  },
  {
    Brand_name: 'Small Black Dress',
    price: 90.0,
    stock: 25,
    classification_id: 5,
  },
  {
    Brand_name: 'Oversized Glasses',
    price: 12.99,
    stock: 22,
    classification_id: 2,
  },
  {
    Brand_name: 'Cuban',
    price: 282.99,
    stock: 12,
    classification_id: 4,
  },
  {
    Brand_name: 'Army Cargo Pants',
    price: 32.99,
    stock: 50,
    classification_id: 3,
  },
];

const seedBrands = () => Brand.bulkCreate(BrandData);

module.exports = seedBrands;