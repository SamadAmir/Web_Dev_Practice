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
        <h2>List of clients</h2>
        <a class="btn btn-primary" href="/WE-LAB08/Task1/create.php" role="button">New Client</a>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Adress</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <?php
                $servername="localhost";
                $username = "root";
                $password = "";
                $database = "myshop";

                // Create Connection
                $connection= new mysqli($servername,$username,$password,$database);

                //Check Connection
                if($connection->connect_error){
                    die("Connection failed " . $connection->connect_error);
                }

                //read data from rows
                $sql= "SELECT * FROM clients";
                $result=$connection->query($sql);

                if(!$result)
                {
                    die("Invalid Query: " . $connection_error);
                }

                //read data of each row

                while($row = $result->fetch_assoc()){
                    echo "
                    <tr>
                    <td>$row[id]</td>
                    <td>$row[name]</td>
                    <td>$row[email]</td>
                    <td>$row[phone]</td>
                    <td>$row[address]</td>
                    <td>$row[created_at]</td>
                    <td>
                        <a class='btn btn-primary btn-sm' href='/WE-LAB08/Task1/edit.php?id=$row[id]'>Edit</a>
                        <a class='btn btn-danger btn-sm' href='/WE-LAB08/Task1/delete.php?id=$row[id]'>Delete</a>
                    </td>
                </tr>
                    ";
                }
                ?>
                
            </tbody>
        </table>

    
</body>
</html>