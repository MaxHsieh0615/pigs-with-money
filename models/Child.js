module.exports = function(db, DataTypes) {
  const Child = db.define("children", {
    name: {
      type: DataTypes.STRING
    },
    piggy_bank_id: {
      type: DataTypes.INTEGER
    },
    balance: {
      type: DataTypes.FLOAT
    },
    jobs_completed: {
      type: DataTypes.STRING
    }
  });
  return Child;
};
