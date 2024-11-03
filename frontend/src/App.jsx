import { useState } from 'react'

import './App.css'
import PostLists from './pages/PostLists'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <PostLists/>

    </>
  )
}

export default App
