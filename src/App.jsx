import { useState } from 'react'
import './App.css'
import Cart from './Component/Cart/Cart'





function App() {
  const [count, setCount] = useState(0)
  const [courseName, setCourseName] = useState([]);

 

  return (
    <>
      
      <div className='max-w-7xl m-auto'>
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center mt-12'>Course Registration</h1>
      
      <Cart></Cart>
      
     
      </div>
      
    </>
  )
}

export default App
