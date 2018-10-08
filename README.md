

Bamazon

Description

This application portrays a CLI based storefront using MYSQL as a database and the npm inquirer to allow for userinput. 

MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside a MySQL client to populate the database. You're now ready to run the Bamazon customer application.

Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order, and the application is restarted.

Below is the working example:

![bAmazon Customer Cli](Video/bamazonCustomer.mov)
