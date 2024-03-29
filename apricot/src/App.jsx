
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import TermsOfService from './pages/TOS'



export default function App() {

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tos" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>


  )
}