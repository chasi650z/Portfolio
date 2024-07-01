import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar.jsx';
import Me from './components/main/me.jsx';
import Skills from './components/Skills/Skills.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Me/>
    <Skills/>
    </div>
    </>
  );
}

export default App;
