const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}
Product.init(
  {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
        price: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: { isDecimal: true },
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: { isNumeric: true },
		},
		category_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "category",
				key: "id",
			},
		},
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: 'brand',
  }
);

module.exports = brand;