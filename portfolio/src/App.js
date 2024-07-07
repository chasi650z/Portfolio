import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';
import Me from './components/main/me.jsx';
import Skills from './components/Skills/Skills.jsx';
import { Route, Routes } from 'react-router-dom';
 

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes className='container'>
    <Route path="/" element ={<Me/>} />
    <Route path="/skills" element ={<Skills/>} />
    </Routes>
    </div>

    



    </>
  );
}

export default App;
