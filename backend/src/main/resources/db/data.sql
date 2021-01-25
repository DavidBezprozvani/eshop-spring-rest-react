INSERT INTO PRODUCT (name, description, in_stock, price) VALUES
('Cheeseburger', 'Tasty very', 1, 10.99),
('Angus Burger', 'Tasty very', 1, 10.99),
('Kebab', 'Tasty very', 13, 10.99),
('Pizza', 'Tasty very', 11, 10.99),
('Quesadilla', 'Tasty very', 111, 10.99),
('Tacos', 'Tasty very', 7, 10.99),
('Tom yum', 'Tasty very', 2, 10.99);

INSERT INTO USER (id, password, username) VALUES
(1, '{bcrypt}$2y$12$sxDWzQoUs9l5HCQW.WJHEuF8cxoVx6IQbhPoN/XUaQOeTodUHmLBm', 'admin'),
(2, '{bcrypt}$2y$12$hiVqRQf5TMC8FXM/khQy3.mrl/kj9MK0t3G/GhXcB2lzT88ikVQh6','user'),


INSERT INTO ROLE (id, role_name) VALUES
(1, 'ADMIN'),
(2, 'USER');

INSERT INTO USER_ROLES (user_id, role_id) VALUES
(1, 1),
(1, 2),
(2, 2);