<!DOCTYPE html>
<html>
<head>
    <title>Lab Manual Example</title>
</head>
<body>
    <h2>Lab Manual Example</h2>

    <h3>1. Simple Arithmetic Operations:</h3>
    <?php
    // Simple arithmetic operations
    $num1 = 10;
    $num2 = 5;

    echo "Addition: " . ($num1 + $num2) . "<br>";
    echo "Subtraction: " . ($num1 - $num2) . "<br>";
    echo "Multiplication: " . ($num1 * $num2) . "<br>";
    echo "Division: " . ($num1 / $num2) . "<br>";
    echo "Modulus: " . ($num1 % $num2) . "<br>";
    ?>

    <h3>2. Conditional Statements:</h3>
    <?php
    // Conditional Statements
    $x = 10;
    $y = 5;

    if ($x > $y) {
        echo "$x is greater than $y<br>";
    } elseif ($x < $y) {
        echo "$x is less than $y<br>";
    } else {
        echo "$x is equal to $y<br>";
    }
    ?>

    <h3>3. Looping:</h3>
    <?php
    // Looping
    echo "Using for loop:<br>";
    for ($i = 1; $i <= 5; $i++) {
        echo "Iteration $i<br>";
    }

    echo "<br>Using while loop:<br>";
    $j = 1;
    while ($j <= 5) {
        echo "Iteration $j<br>";
        $j++;
    }
    ?>

    <h3>4. Functions:</h3>
    <?php
    // Functions
    function square($num) {
        return $num * $num;
    }

    $number = 5;
    echo "Square of $number is: " . square($number) . "<br>";
    ?>

    <h3>5. Signup Form (Using GET and POST methods):</h3>
    <h4>GET Method:</h4>
    <form method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <input type="submit" value="Submit">
    </form>

    <?php
    // Process form data using GET method
    if (isset($_GET['name'])) {
        $name = $_GET['name'];
        echo "<p>Welcome, $name (Using GET method).</p>";
    }
    ?>

    <h4>POST Method:</h4>
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
    // Process form data using POST method
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $email = $_POST['email'];

        echo "<p>Thank you, $username! Your email is: $email (Using POST method).</p>";
    }
    ?>

</body>
</html>
