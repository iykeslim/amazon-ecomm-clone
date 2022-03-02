// import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazon clone</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">sign in</a>
        </div>
      </header>
      <main>
        <Routes>
        <Route path="/product/:id" element={<ProductScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
      </main>
      <footer className="row center">
        All rights reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
// src\components\Product.js
