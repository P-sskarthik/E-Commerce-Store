import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import  store  from '../utils/store.js'
import About from './Context/About.jsx'
import Cart from './Context/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fix the import
import NavBar from './Context/NavBar.jsx'
import Dashboard from './Context/Dashboard.jsx'
import Settings from './Context/Settings.jsx'
import { User } from './components/User.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar /> 

      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />

        <Route path="dashboard" >
      
        <Route path="settings" element={<Settings />} />
        <Route path="user" element={<User/>}/>

        </Route>

      </Routes>

    </BrowserRouter>
    </Provider>
)