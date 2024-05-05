<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <title>Document</title>
</head>
<body>
<nav class="navbar bg-body-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Product</a>
  </div>
</nav>

@if($message=Session::get("success"))
<div class="alert alert-success alert-block">
    <strong> {{$message}} </strong>
@endif

</div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="card mt-3 p-3">
                <form method="POST" action="{{ route('products.store') }} " enctype="multipart/form-data">
                    @csrf       
                    <div class="form-group">
                        <label>Name </label>        
                        <input type="text" name = "name" class="form-control" value="{{old('name')}}"/>
                        @if($errors->has("name"))
                        <span class="text-danger">{{ $errors->first("name")}}</span> 
                        @endif  
</div>  
                       <div class="form-group">
                        <label>Description </label>
                        <textarea class="form-control" name="description">{{old('description')}} </textarea>
                        @if($errors->has("description"))
                            <span class="text-danger">{{ $errors->first("description") }}</span> 
                        @endif
</div>
<div class="form-group">
                        <label>Image </label>
                        <input type="file" name = "image" class="form-control"/>
                        @if($errors->has("image"))
                        <span class="text-danger">{{ $errors->first("image")}}</span> 
                        @endif
</div>
<button type="submit" class = "btn btn-success mt-2">Submit </button>

</form>
                
</div>
    </div>
</div>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
