<?php
$name="";
$email="";
$phone="";
$address="";
$errorMessage = "";
$successMessage="";

$servername="localhost";
$username = "root";
$password = "";
$database = "myshop";

//Create Connection to DATABASE
$connection= new mysqli($servername,$username,$password,$database);


if( $_SERVER['REQUEST_METHOD'] == 'POST' ){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
}
    do{
        if( empty($name) || empty($email) || empty($phone) || empty($address) ){
            $errorMessage = "All fields are Required";
            break;
        }

        $sql= "INSERT INTO clients(name,email,phone,address)" .
              "VALUES ('$name','$email','$phone','$address  ')";
        $result=$connection->query($sql);

        if(!$result)
        {
            $errorMessage= "Invalid Query" . $connection->error;
            break;
        }

        $name="";
        $email="";
        $phone="";
        $address="";

        $successMessage="Client is successfully added";

        header("Location: /WE-LAB08/Task1/index.php");    
        exit;

    }while(false)

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Task1</title>
</head>
<body>
    <div class="container my-5">
        <h2> New Client </h2>

        <?php
        if ( !empty( $errorMessage )){
            echo"
            <div class='alert alert-danger' role='alert'>
             <strong>$errorMessage</strong>
            <button type='button' class='btn-close' data-bs-dismiss='alert' area-label='Close'></button></div>    
            ";
        }
        ?>
        <form method="post">
            <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="name" value="<?php echo $name; ?>">
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-6">
                <input type="email" class="form-control" name="email" value="<?php echo $email; ?>">
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Phone</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="phone" value="<?php echo $phone; ?>">
            </div>
            </div>

            <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Address</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="address" value="<?php echo $address; ?>">
            </div>
            </div>

            <?php
        if ( !empty( $successMessage )){
            echo"
            <div class='alert alert-success' role='alert'>
             <strong>$successMessage</strong>
            <button type='button' class='btn-close' data-bs-dismiss='alert' area-label='Close'></button></div>   
            ";
        }
        ?>

            <div class="row mb-3">
            <div class="offset-sm-3 col-sm-3 d-grid">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="col-sm-3 d-grid">
                <a class="btn btn-outline-primary" href="/WE-LAB08/Task1/index.php" role="button">Cancel</a>
            </div>
            </div>

        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>