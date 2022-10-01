const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connect');
class brandmark extends Model {}

brandmark.init(
  {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
	
		mark_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "mark",
				key: "id",
			},
		},
        brand_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "brand",
				key: "id",
			},
		},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'brand_mark',
  }
);

module.exports = brandMark;