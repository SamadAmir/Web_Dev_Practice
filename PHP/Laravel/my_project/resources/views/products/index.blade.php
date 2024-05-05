<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <title>Laravel CRUD</title>
</head>
<body>  
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">LARAVEL CRUD</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Products</a></li>
    </ul>
  </div>
</nav>
<div class="container">
    <div class="text-right">
        <a href="products/create" class="btn btn-primary mt-2">New Product</a>
      </div>
        <h1>Products </h1>
     </div>

     <!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
​
<div class="container">          
  <table class="table table-hover">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        @foreach($products as $product)
      <tr>
        <td>{{$loop->index+1}}</td>
        <td>{{$product->name}}</td>
        <td>{{$product->description}}</td>
        <td><img src="products/{{$product->image}}" class="rounded-cirlce" width="30" height="30"/></td>
        <td>
        <a href="products/{{$product->id}}/edit" class="btn btn-success btn-sm">EDIT</a>
        <a href="products/{{$product->id}}/delete" class="btn btn-danger btn-sm mx-2">Delete</a>
        </td>

      </tr>
      @endforeach
    </tbody>
  </table>
</div>
​       
</body>
</html>
​




<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
</body>
</html>