const seedClassifications = require('./classification-seeds');
const seedBrand = require('./Brand-seeds');
const seedMark = require('./Mark-seeds');
const seedBrandMark = require('./Brand-Mark-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => 
{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedClassifications();
  console.log('\n----- Classifications SEEDED -----\n');
  await seedBrand();
  console.log('\n----- Brand SEEDED -----\n');
  await seedMark();
  console.log('\n----- Mark SEEDED -----\n');
  await seedBrandMark();
  console.log('\n----- Brand Mark SEEDED -----\n');

  process.exit(0);
};

seedAll();