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
import Kontakt from './pages/Kontakt/Kontakt.jsx'
import KobinetKluch from './pages/KabinetKluch/KabinetKluch.jsx'
import Uslugi from './pages/Uslugi/Uslugi.jsx'
import Katalog from './pages/Katalog/Katalog.jsx'
import Proizvoditeli from './pages/Proizvoditeli/Proizvoditeli.jsx'
import Aktsiya from './pages/Aktsiya/Aktsiya.jsx'
import Stati from './pages/Blog/Stati.jsx'
import Vakansiya from './pages/Kompani/Vakansiya.jsx'
import Sertifikati from './pages/Kompani/Sertifikati.jsx'
import Otziv from './pages/Kompani/Otziv.jsx'
import Product from './pages/Proizvoditeli/Product.jsx'
import ProductCategory from './components/ProductCategory/ProductCategory.jsx'
import Palata from './pages/KabinetKluch/Palata.jsx'
import Faq from './pages/FAQ/Faq.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import Korzinka from './pages/Korzinka/Korzinka.jsx'
import Snarvit from './pages/Snarvit/Snarvit.jsx'
import Heart from './pages/Heart/Heart.jsx'
import Profile from './pages/User/Profile.jsx'
import Tovar from './pages/Tovar/Tovar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
            <App />
            <Routes>
            <Route path="/" element={<Glavnaya />} /> 
              <Route path="/Kompani" element={<Kompani />} />
              <Route path="/Dostavka" element={<Dostavka />} />
              <Route path="/Oplata" element={<Oplata />} />
              <Route path="/Garanti" element={<Garanti />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Kontakt" element={<Kontakt />} />
              <Route path="/Kobinet" element={<KobinetKluch />} />
              <Route path="/Uslugi" element={<Uslugi />} />
              <Route path="/Katalog" element={<Katalog />} />
              <Route path="/Proizvoditeli" element={<Proizvoditeli />} />
              <Route path="/Aktsiya" element={<Aktsiya />} />
              <Route path="/Stati" element={<Stati />} />
              <Route path="/Vakansiya" element={<Vakansiya />} />
              <Route path="/Sertifikati" element={<Sertifikati />} />
              <Route path="/Sertifikati" element={<Sertifikati />} />
              <Route path="/Otziv" element={<Otziv />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/ProductCategory" element={<ProductCategory />} />
              <Route path="/Palata" element={<Palata />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/Korzinka" element={<Korzinka />} />
              <Route path="/Snarvit" element={<Snarvit />} />
              <Route path="/Heart" element={<Heart />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/tovar/:id" element={<Tovar />} />
              
            
            </Routes>
          </Router>
  </Provider>
  </React.StrictMode>,
)
