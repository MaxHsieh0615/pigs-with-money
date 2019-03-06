module.exports = function(db, DataTypes) {
  const Child = db.define("children", {
    child_name: {
      type: DataTypes.STRING
    },
    piggy_bank_id: {
      type: DataTypes.INTEGER
    },
    piggy_bank_balance: {
      type: DataTypes.FLOAT
    },
    jobs_completed: {
      type: DataTypes.STRING
    }
  });
  return Child;
};
