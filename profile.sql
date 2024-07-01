CREATE TABLE Profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    bio TEXT,
    availabilityTime JSON,
    priceRange JSON,
    workTypes JSON,
    areas JSON,
    houseType ENUM('small', 'big', 'both'),
    FOREIGN KEY (userId) REFERENCES Users(id)
);
