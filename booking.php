<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guesthouse";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $room_type = $_POST['room_type'];
    $check_in = $_POST['check_in'];
    $check_out = $_POST['check_out'];
    $guest_name = $_POST['guest_name'];
    $guest_email = $_POST['guest_email'];
    $contact_number = $_POST['contact_number'];
    
    

    // Check availability
    $sql = "SELECT * FROM bookings WHERE room_type='$room_type' AND 
            (check_in <= '$check_out' AND check_out >= '$check_in')";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Sorry, the room is not available for the selected dates.";
    } else {
        // Insert booking
        $sql = "INSERT INTO bookings (room_type, check_in, check_out, guest_name, contact_number, guest_email)
                VALUES ('$room_type', '$check_in', '$check_out', '$guest_name','$contact_number', '$guest_email')";
        if ($conn->query($sql) === TRUE) {
            echo "<h1>Booking Successful!</h1>";
            echo "<p>Thank you for your booking. We look forward to your stay at our guesthouse.</p>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>