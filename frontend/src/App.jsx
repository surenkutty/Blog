import { useState } from 'react'

import './App.css'
import PostLists from './pages/PostLists'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PostDetail from './pages/PostDetails';
import CategoryPosts from './pages/CategoryPosts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
            <Navbar/>
              <Routes>
                  <Route path='/' element={<PostLists/>} />
                  <Route path='/posts/:id' element={<PostDetail/>} />
                  <Route path='/posts/category/:id' element={<CategoryPosts/>} />
              </Routes>
              
            <Footer/>
          </Router>

      

    </>
  )
}

export default App
