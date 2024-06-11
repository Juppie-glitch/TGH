CREATE DATABASE guesthouse;

USE guesthouse;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_type VARCHAR(50),
    check_in DATE,
    check_out DATE,
    contact_number VARCHAR(10),
    guest_name VARCHAR(100),
    guest_email VARCHAR(100)
);