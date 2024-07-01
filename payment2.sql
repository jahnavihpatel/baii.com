CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bookingId INT,
    amount DECIMAL(10, 2),
    paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bookingId) REFERENCES Bookings(id)
);

