var mysql = require("mysql");
var inquirer = require("inquirer");

// create connecetion info for sql database 
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"root",
    database:"bamazon_db",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});

var divider = "--------------------------------------------------"

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });



function start() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      console.log(results)
      console.log(divider);
      inquirer
      .prompt([
          {
              name: "item",
              type: "input",
              message: "what is the item id of the product you would like to purchase?",
              validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }

          },
          { 
          name: "amount",
          type: "input",
          message: "How much units would you like to purchase?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
        }
        ])
        .then(function(answer){
            
            var itemToBuy;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === parseInt(answer.item)){
                itemToBuy = results[i];
                
                
                
        };
        }

        if (itemToBuy.stock_quantity > parseInt(answer.amount)){

            var total = itemToBuy.price * parseInt(answer.amount);

            
            connection.query (
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: itemToBuy.stock_quantity - parseInt(answer.amount)
                    },
                    {
                        item_id: itemToBuy.item_id
                    }
                ],

                

                function(error) {
                    if (error) throw err;
                    console.log("Your order was placed succesfully!");
                    console.log(divider);
                    console.log ("Your total is: $" + total.toFixed(2) )
                    
                }
            )
        }

        else {

            console.log("Sorry, we were unable to process your order.")
            start();
        }

        
        
        
            

            
            

        })
    })
};





  


    






