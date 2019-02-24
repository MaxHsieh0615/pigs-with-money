
module.exports = function(db, DataTypes) {
  const Job = db.define('job', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    budget: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.STRING,
      values: DataTypes.ENUM('Open', 'Closed')
    },

    date_assigned:{
      type: DataTypes.DATE
    },
    date_completed:{
      type: DataTypes.DATE
    },
    
  });

  return Job;
};



