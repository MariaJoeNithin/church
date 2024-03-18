import {Routes, Route, Navigate} from 'react-router-dom'



import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to ='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
    
    </Routes>
  )
}

export default Routers