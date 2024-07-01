CREATE TABLE Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerId INT,
    baiId INT,
    workType ENUM('utensils cleaning', 'laundry', 'mopping', 'dusting'),
    bookingDate DATETIME,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled'),
    FOREIGN KEY (customerId) REFERENCES Users(id),
    FOREIGN KEY (baiId) REFERENCES Users(id)
);
