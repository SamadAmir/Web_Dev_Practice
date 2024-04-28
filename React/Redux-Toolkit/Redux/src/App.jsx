import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './App.css'
// import Product from './Components/Product'
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import RootLayout from "./Components/RootLayout";

function App() {

  const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" index element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <>
     <div className="App">
      <RouterProvider router={router}></RouterProvider>
     </div>
     
     
    </>
  )
}

export default App
