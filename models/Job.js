
module.exports = function(db, DataTypes) {
  const Job = db.define('job', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    budget: {
      type: DataTypes.STRING
    },
    job_status: {
      type: DataTypes.STRING,
      values: DataTypes.ENUM('Open', 'Closed')
    },
    job_owner: {
      type: DataTypes.STRING
    }
  });
  return Job;
};



