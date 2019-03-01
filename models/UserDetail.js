
/*
    email String PK,
    parent_email String FK,
    name_first String,
    name_last String,
    balance Integer,
    account_type
*/

module.exports = (db, DataTypes) => {
  var UserDetail = db.define("UserDetail",{

    name_first:{
      type: DataTypes.STRING,
    },

    name_last:{
      type:DataTypes.STRING,
    },
    balance:{
      type: DataTypes.FLOAT,
      defaultValue: 0
    },

    //enumeration account_type value can be parent or child 
    account_type:{  
      type:   DataTypes.ENUM,
      defaultValue: 'parent',
      values: ['parent', 'child']
      
    }

  });

  return UserDetail;
}