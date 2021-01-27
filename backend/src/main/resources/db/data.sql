INSERT INTO PRODUCT (name, description, in_stock, price) VALUES
('Cheeseburger', 'Tasty very', 1, 10.99),
('Angus Burger', 'Tasty very', 1, 10.99),
('Kebab', 'Tasty very', 13, 10.99),
('Pizza', 'Tasty very', 11, 10.99),
('Quesadilla', 'Tasty very', 111, 10.99),
('Tacos', 'Tasty very', 7, 10.99),
('Tom yum', 'Tasty very', 2, 10.99);

INSERT INTO USER (id, name, surname, password, username) VALUES
(1, 'Ponas', 'Bebras', '{bcrypt}$2y$12$w25k6SFqscT/J0J6bRb/1OEBoMYds/6GVRVfDx7qd9.xGl6zJDmW6', 'admin'),
(2, 'Useris', 'Pirmasis','{bcrypt}$2y$12$SkiCRd4l7o96N9vyXYZbqehrbzGXJ8dHeZWkPDK.AxnWzmDQ0uGKi','user');


INSERT INTO ROLE (id, role_name) VALUES
(1, 'ADMIN'),
(2, 'USER');

INSERT INTO USER_ROLES (user_id, role_id) VALUES
(1, 1),
(1, 2),
(2, 2);