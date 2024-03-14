import React from 'react';
import PostStory from './components/PostStory/PostStory';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className='Appp'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/post' element={<PostStory />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;