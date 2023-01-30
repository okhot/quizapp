import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './core/pages/home/Home';
import Game from './core/pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
