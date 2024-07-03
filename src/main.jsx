import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Kompani from './pages/Kompani/Kompani.jsx'
import Dostavka from './pages/Dostavka/Dostavka.jsx'
import Oplata from './pages/Oplata/Oplata.jsx'
import Garanti from './pages/Garanti/Garanti.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Glavnaya from './pages/Glavnaya/Glavnaya.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
            <App />
            <Routes>
            <Route path="/" element={<Glavnaya />} /> 
              <Route path="/Kompani" element={<Kompani />} />
              <Route path="/Dostavka" element={<Dostavka />} />
              <Route path="/Oplata" element={<Oplata />} />
              <Route path="/Garanti" element={<Garanti />} />
              <Route path="/Blog" element={<Blog />} />
            
            </Routes>
          </Router>
  </React.StrictMode>,
)
