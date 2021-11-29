module.exports = app => {
    const toDos = require("../controllers/toDo.controller.js");
    let router = require("express").Router();
  
    router.post("/", toDos.create);
    
    router.get("/", toDos.findAll);
        
    router.put("/:id", toDos.update);
    
    router.delete("/:id", toDos.delete)
    
    router.delete("/", toDos.deleteAllCompleted);
    
    app.use("/api/toDos", router);
  };
