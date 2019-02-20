module.exports = function(db, DataTypes) {
  const Child = db.define('children', {
    child_name: {
      type: DataTypes.STRING
    },
    piggy: {
      type: DataTypes.STRING
    }
  });
  return Child;
};


