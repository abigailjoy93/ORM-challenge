// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "categories",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "categories",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product",
  otherKey: "tag",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag",
  otherKey: "productID",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
