import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';
import Me from './components/main/me.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Me/>
    </div>
    </>
  );
}

export default App;
