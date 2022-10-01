const {BrandMark} = require('../models');

const BrandMarkData = [
  {Brand_id: 1,
    Mark_id: 6,},
  {Brand_id: 1,
    Mark_id: 7,},
  {Brand_id: 1,
    Mark_id: 8,},
  {Brand_id: 3,
    Mark_id: 5,},
  {Brand_id: 4,
    Mark_id: 1,},
  {Brand_id: 4,
    Mark_id: 2,},
  {Brand_id: 2,
    Mark_id: 6,},
  {Brand_id: 3,
    Mark_id: 1,},
  {Brand_id: 3,
    Mark_id: 3,},
  {Brand_id: 3,
    Mark_id: 4,},
  {Brand_id: 4,
    Mark_id: 8,},
  {Brand_id: 5,
    Mark_id: 3,},
];

const seedBrandMarks = () => BrandMark.bulkCreate(BrandMarkData);

module.exports = seedBrandMarks;