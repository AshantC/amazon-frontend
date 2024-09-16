import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeScreen from './components/screen/homeScreen/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
