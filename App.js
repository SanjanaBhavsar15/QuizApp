import React from 'react'
import RegQ from './RegQ'
import Quiz from './Quiz'
import ResultQ from './ResultQ'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<RegQ/>}></Route>
          <Route path='/RegQ' element={<RegQ/>}></Route>
          <Route path='/Quiz' element={<Quiz/>}></Route>
          <Route path='/ResultQ' element={<ResultQ/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
