const router = require("express").Router();
const childrenController = require('../../controllers/childrenController');

// module.exports = (app) =>{
//     app.post('/api/AddChild',childrenController.createChild);
// }



module.exports = (app) =>{
    app.post('/api/AddChild',chilrenController.createChild);
    app.post('/api/addchild',childrenController.createChild);
    app.get("/api/findAllByChild", childrenController.findAllByChild);
    app.get("api/findbyid", childrenController.findById);
    app.put("/api/updatechildbudget", childrenController.updateChildBudget);
    app.delete("/api/removechild", childrenController.removeChild);
}
