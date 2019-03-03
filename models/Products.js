module.exports = function(db, DataTypes) {
  const Products = db.define("products", {
    name: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.STRING
    },
    qty: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.FLOAT
    }
  });

  return Products;
};
