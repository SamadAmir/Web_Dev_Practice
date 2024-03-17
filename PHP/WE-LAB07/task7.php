<!DOCTYPE html>
<html>
<head>
    <title>Signup Form</title>
</head>
<body>
    <h2>Signup Form</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Submit">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        echo "<h2>Submitted Data:</h2>";
        echo "Username: $username<br>";
        echo "Email: $email<br>";
    }
    ?>
</body>
</html>
