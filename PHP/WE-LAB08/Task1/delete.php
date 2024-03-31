<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "myshop";

// Create Connection to DATABASE
$connection = new mysqli($servername, $username, $password, $database);

// Check Connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$id = $_GET["id"]; // Assuming you're passing the client ID via GET parameter

$errorMessage = "";
$successMessage = "";

// Check if the client ID is provided
if (isset($id)) {
    // Delete client record from the database
    $sql = "DELETE FROM clients WHERE id = $id";
    if ($connection->query($sql) === TRUE) {
        $successMessage = "Client deleted successfully!";
    } else {
        $errorMessage = "Error deleting client: " . $connection->error;
    }
} else {
    $errorMessage = "Client ID not provided!";
}

$connection->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Client</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="container my-5">
        <h2>Delete Client</h2>

        <?php if (!empty($errorMessage)) : ?>
            <div class="alert alert-danger" role="alert">
                <strong><?php echo $errorMessage; ?></strong>
            </div>
        <?php endif; ?>

        <?php if (!empty($successMessage)) : ?>
            <div class="alert alert-success" role="alert">
                <strong><?php echo $successMessage; ?></strong>
            </div>
        <?php endif; ?>

        <div class="row mb-3">
            <div class="col-sm-6">
                <a class="btn btn-danger" href="/WE-LAB08/Task1/index.php" role="button">Back to Client List</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>
