import React from 'react'
import Navbar from './components/Navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

const App = () => {
  return (
    <main className='w-full bg-gray-300'>
      <Navbar />
      <div className='flex items-start relative flex-col xl:flex-row w-full pt-5 xl:pt-10 px-3 xl:px-24'>
        <LeftSection />
        <RightSection />
      </div>
    </main>
  )
}

export default App