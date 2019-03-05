const bcrypt = require('bcryptjs');

module.exports = function(db, DataTypes){
  const Users = db.define("Users",{
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    balance:{
      type: DataTypes.FLOAT,
      defaultValue: 0
    },

    // enumeration account_type value can be parent or child 
    account_type:{  
      type:   DataTypes.ENUM,
      values: ['parent', 'child'],
      defaultValue: 'parent'
    }
    
  });

  // Creating a custom method for our User model. 
  // This will check if an unhashed password entered by the 
  // user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return Users;
}