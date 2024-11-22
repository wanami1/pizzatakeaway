

INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) 
VALUES (1, NOW(), 25.00);


SET @last_order_id = LAST_INSERT_ID();


INSERT INTO Order_Items (OrderID, PizzaID, Quantity, Subtotal) 
VALUES (@last_order_id, 1, 1, 12.50),  -- Margherita pizza
       (@last_order_id, 2, 1, 12.50);  -- Pepperoni pizza


SELECT o.OrderID, c.Name AS CustomerName, p.Name AS PizzaName, oi.Quantity, oi.Subtotal
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Order_Items oi ON o.OrderID = oi.OrderID
JOIN Pizzas p ON oi.PizzaID = p.PizzaID;
