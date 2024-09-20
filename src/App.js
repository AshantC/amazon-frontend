import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/screen/homeScreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import Products from './components/screen/homeScreen/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
      </Routes>

    </div>
  );
}

export default App;
