const { Mark } = require('../models');const markData = [
  {mark_name: 'pink top',},
  {mark_name: 'apple watch',},
  {mark_name: 'pink',},
  {mark_name: 'purple',},
  {mark_name: 'orange',},
  {mark_name: 'white',},
  {mark_name: 'gold',},
  {mark_name: 'pop culture',},
];

const seedMarks = () => Mark.bulkCreate(markData);

module.exports = seedMarks;