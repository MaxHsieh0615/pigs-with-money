module.exports = function(db, DataTypes) {

  const PiggyBank = db.define("piggy_bank", {
    amount: {
      type: DataTypes.FLOAT
    },
    transaction: {
      type: DataTypes.ENUM,
      values: ['withdraw', 'deposit']
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return PiggyBank;
};
