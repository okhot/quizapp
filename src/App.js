import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './core/pages/home/Home';
import Game from './core/pages/Game';
import { useState } from 'react';
import { PageProvider } from './Context';
import Results from './core/pages/Results';
import useFetch from './useFetch';

function App() {
  const [index, setIndex] = useState(0)
  const question = useFetch();

  function movePage(){
    setIndex((prev) => prev+1)
    console.log(index)
  }

 
  return (
    <PageProvider value={{movePage, index, question}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home number={index} /> } />
        <Route path='/Game/:id' element={<Game /> }  />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
    </PageProvider>
  );
}

export default App;
