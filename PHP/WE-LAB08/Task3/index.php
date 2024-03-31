<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myshop";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user data from the database (replace with your own logic to fetch user data)
$user_id = 1; // Assuming the user is logged in and their user ID is known
$sql = "SELECT * FROM user WHERE id = $user_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $name = $row["name"];
    $email = $row["email"];
    $profile_picture = $row["profile_picture"];
} else {
    echo "User not found.";
}

// Update user data if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Update user information in the database (replace with your own logic to update user data)
    $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$user_id";

    if ($conn->query($sql) === TRUE) {
        echo "Profile updated successfully";
    } else {
        echo "Error updating profile: " . $conn->error;
    }

    // Handle profile picture upload
    if ($_FILES["profile_picture"]["error"] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["profile_picture"]["name"]);
        move_uploaded_file($_FILES["profile_picture"]["tmp_name"], $target_file);

        // Update profile picture path in the database
        $sql = "UPDATE users SET profile_picture='$target_file' WHERE id=$user_id";
        $conn->query($sql);
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Additional custom styles can be added here */
    </style>
</head>
<body>
    <div class="container mt-5">
        <h2 class="mb-4">User Profile</h2>
        <form method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" value="<?php echo $name; ?>">
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" value="<?php echo $email; ?>">
            </div>
            
            <div class="form-group">
                <label for="profile_picture">Profile Picture:</label><br>
                <img src="https://source.unsplash.com/random/200x200?sig=1" class="img-thumbnail" width="200" height="200" alt="Profile Picture"><br>
                <input type="file" class="form-control-file" id="profile_picture" name="profile_picture">
            </div>
            
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
    
    <!-- Bootstrap JS and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
