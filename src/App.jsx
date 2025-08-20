import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Card from './components/Card';
import { Footer } from './components/Footer';
function App() {
  const [searchQuery, setSearchQuery] = useState('best sellers');
  return (
    <>
     <div className='min-h-screen bg-gray-900'>
      <Navbar handleSearch={(term) => setSearchQuery(term)}  />
      <Banner />
      <Card searchQuery= {searchQuery}/>
     </div>\
      <Footer />
    </>
  )
}

export default App
