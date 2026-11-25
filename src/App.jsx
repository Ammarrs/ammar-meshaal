import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layouts/Layout'
import Home from './pages/Home';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
