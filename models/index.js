const brand = require('./brand');
const classification = require('./classification');
const mark = require('./mark');
const brandMark = require('./brandMark');

brand.belongsTo(classification, {foreignKey:"classification_id"});

classification.hasMany(brand, {foreignKey:"classification_id"});
mark.belongsToMany(brand, {
    through:{
      model: brandMark,
      foreignKey: "mark_id"
    }
  })

brand.belongsToMany(mark, {
  through:{
    model: brandMark,
    foreignKey: "brand_id"
  }
});

module.exports = {
  brand,
  classification,
  mark,
  brandMark,
};