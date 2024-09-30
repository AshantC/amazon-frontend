import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/screen/homeScreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import Products from './components/screen/products/Products';
import Footer from './components/footer/Footer';
import Cart from './components/screen/cart/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
