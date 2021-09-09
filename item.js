/** item in a shopping cart */

const items = require("./fakedb")

class Item{
    constructor(name, price) {
        this.name = name;
        this.price = price;
        // Keep Track of All Items
    items.push(this);
    }

    static findAll(){
        return items
    }
    /** Update search items with matching name  to Json data */
    static update(name,data){
        let searchItem = Item.findAll(name);
        if (searchItem === undefined){
            throw{ message: "Not Found", status: 404}
        }
        searchItem.name = data.name;
        searchItem.price = data.price;
        
        return searchItem;

    }

   /// Find and Return item with the same name

   static find(name){
       const searchItem = items.find(v => v.name === name);
       if (searchItem === undefind){
           throw { message: "Not Found", status: 404 }
       }
       return searchItem
   }

   /// Remove item with matching Id ///
   static remove(name){
       let foundIdx = items.findIndex(v => v.name === name);
       if (foundIdx === -1){
           throw {message: "Not Found", status:404}
       }
       items.splice(foundIdx,1);
   }
}
module.exports= Item;