import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './core/pages/home/Home';
import { useState } from 'react';
import { PageProvider } from './Context';
import Results from './core/pages/Results';
import useFetch from './useFetch';
import QuestionCard from './core/organisms/QuestionCard';

function App() {
  const question = useFetch();
  const [answer, setAnswer] = useState([])

  return (
    <PageProvider value={{question, answer, setAnswer}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  /> } />
        <Route path='/game/:id' element={<QuestionCard /> }  />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
    </PageProvider>
  );
}

export default App;
