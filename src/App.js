import './App.css';
import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Authenticate from './Pages/Authenticate';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/authenticate' element={<Authenticate />} />
    </Routes>
  );
}

export default App;
