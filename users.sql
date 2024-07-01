CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(15),
    address TEXT,
    userType ENUM('customer', 'bai'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
