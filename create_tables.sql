
-- Creating Customers Table
CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Phone TEXT NOT NULL,
    Address TEXT NOT NULL
);

-- Creating Orders Table
CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerID INTEGER NOT NULL,
    OrderDate TEXT NOT NULL,
    TotalAmount REAL NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Creating Pizzas Table
CREATE TABLE Pizzas (
    PizzaID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Size TEXT NOT NULL,
    Price REAL NOT NULL
);

-- Creating Ingredients Table
CREATE TABLE Ingredients (
    IngredientID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Category TEXT NOT NULL
);

-- Creating Suppliers Table
CREATE TABLE Suppliers (
    SupplierID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    ContactInfo TEXT NOT NULL,
    Address TEXT NOT NULL
);

-- Creating Order_Items Table (Many-to-Many relationship between Orders and Pizzas)
CREATE TABLE Order_Items (
    OrderID INTEGER NOT NULL,
    PizzaID INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    Subtotal REAL NOT NULL,
    PRIMARY KEY (OrderID, PizzaID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID)
);

-- Creating Pizza_Ingredients Table (Many-to-Many relationship between Pizzas and Ingredients)
CREATE TABLE Pizza_Ingredients (
    PizzaID INTEGER NOT NULL,
    IngredientID INTEGER NOT NULL,
    PRIMARY KEY (PizzaID, IngredientID),
    FOREIGN KEY (PizzaID) REFERENCES Pizzas(PizzaID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID)
);
