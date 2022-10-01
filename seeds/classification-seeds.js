const { classification } = require('../models');
const classificationData = 
[
  {classification_name: 'Top',},
  {classification_name: 'Pants',},
  {classification_name: 'Earrings',},
  {classification_name: 'Glasses',},
  {classification_name: 'heels',},
];

const seedClassifications = () => classification.bulkCreate(classificationData);

module.exports = seedClassifications;