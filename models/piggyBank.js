module.exports = function(db, DataTypes) {

  //anything else?
  const PiggyBank = db.define("piggy_bank", {
    child_name: {
      type: DataTypes.STRING
    },
    piggy_bank_id: {
      type: DataTypes.INTEGER
    },
    previous_balance: {
      type: DataTypes.FLOAT
    },
    amount_earned: {
      type: DataTypes.FLOAT
    },
    current_balance: {
      type: DataTypes.FLOAT
    },
    date: {
      type: DataTypes.DATE
    }
  });
  return PiggyBank;
};
