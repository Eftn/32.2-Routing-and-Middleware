const express = require ("express");
const Item = require('../item');

const router = new express.Router();

/** GET /items : get list of items */
router.get("/", function(req,res,next){
    try{
        return res.json({items : Item.findAll()});
    } catch(err){
        return next(err)
    }
    

});

/**POST /items -  accept JSON data and add it to the shopping list.
sample request/response looks like:

{“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}} */

router.post("/", function(req,res,next){
    try{
        let newItm = new Item(req.body.name, req.body.price);
        return res.json({item: newItm})
    } catch(err){
        return next(err)
    }
});

/** PATCH /[name] => item */

router.patch('/:name', (req, res, next) => {
    try {
      let foundItem = Item.update(req.params.name, req.body);
      return res.json({ item: foundItem });
    } catch (err) {
      return next(err)
    }
  });
  
  /** DELETE /[name] => "Removed" */
  
  router.delete('/:name', (req, res, next) => {
    try {
      Item.remove(req.params.name);
      return res.json({message:'Deleted'});
    } catch (err) {
      return next(err)
    }
  });
  
  module.exports = router;