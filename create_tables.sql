
-- Creating Customers Table
CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT ,
    Phone TEXT ,
    Address TEXT 
);

-- Creating Orders Table
CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerID INTEGER ,
    OrderDate TEXT ,
    TotalAmount REAL ,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Creating Pizzas Table
CREATE TABLE Pizzas (
    PizzaID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT ,
    Size TEXT ,
    Price REAL NOT NULL
);

-- Creating Ingredients Table
CREATE TABLE Ingredients (
    IngredientID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT ,
    Category TEXT 
);

-- Creating Suppliers Table
CREATE TABLE Suppliers (
    SupplierID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT ,
    ContactInfo TEXT ,
    Address TEXT
);

-- Creating Order_Items Table (Many-to-Many relationship between Orders and Pizzas)
CREATE TABLE Order_Items (
    OrderID INTEGER ,
    PizzaID INTEGER ,
    Quantity INTEGER ,
    Subtotal REAL NOT NULL,
    PRIMARY KEY (OrderID, PizzaID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID)
);

-- Creating Pizza_Ingredients Table (Many-to-Many relationship between Pizzas and Ingredients)
CREATE TABLE Pizza_Ingredients (
    PizzaID INTEGER,
    IngredientID INTEGER ,
    PRIMARY KEY (PizzaID, IngredientID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID)
);
