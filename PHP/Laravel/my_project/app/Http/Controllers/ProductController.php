<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return view('products.index',["products"=>Product::get()]);
    }
    public function create()
    {
        return view('products.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // Upload image
        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path("products"), $imageName);
        } else {
            return back()->with('error', 'Please provide an image.');
        }
    
        try {
            $product = new Product;
            $product->image = $imageName;
            $product->name = $request->name;
            $product->description = $request->description;
            $product->save();
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to save product. Please try again.');
        }
    
        return back()->with('success', 'Product saved successfully.');
    }

    public function edit($id)
    {
        $product = Product::where("id",$id)->first();
        return view("products.edit",["product"=>$product]);
    }

    public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $product = Product::find($id);

    if (!$product) {
        return back()->with('error', 'Product not found.');
    }

    if ($request->hasFile('image')) {
    
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path("products"), $imageName);
        $product->image = $imageName;
    }

    try {
        // Update other product attributes
        $product->name = $request->name;
        $product->description = $request->description;
        $product->save();
    } catch (\Exception $e) {
        return back()->with('error', 'Failed to save product. Please try again.');
    }

    return back()->with('success', 'Product updated successfully.');
}
public function destroy($id)
{
    $product = Product::find($id);

    if (!$product) {
        return back()->with('error', 'Product not found.');
    }

    try {
        // Delete the product
        $product->delete();
    } catch (\Exception $e) {
        return back()->with('error', 'Failed to delete product. Please try again.');
    }

    return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
}



}
