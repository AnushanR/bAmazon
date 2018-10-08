-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;


USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (

  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  
  product_name VARCHAR(30) NOT NULL,
  
  department_name VARCHAR(30) NOT NULL,
  
  price DECIMAL(10,2),
  
  stock_quantity INTEGER(10),

  PRIMARY KEY(item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("IPHONE X Slim Case","ELECTRONICS",17.99,67),
("MCCAFE Premium Roast Coffee","GROCERY",19.97,5280), ("BlenderBottle ProStak System","HOME",18.99,1350), ("Mountain Beard Oil","BEAUTY",9.99,234),
("Mirror Dash Cam 1080P","AUTO",17.99,670), ("Anker SoundBuds Slim Wireless Headphones","ELECTRONICS",31.99,508), ("LUNEX Mens Wayfarer Sunglasses ","CLOTHING",47.99,670),
("Smart Power Strip WiFi ","HOME",27.99,120), ("Nest Learning Thermostat","HOME",372.99,56), ("OPTIMUM NUTRITION Whey Protein Powder","HEALTH",67.99,58);
 