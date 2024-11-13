import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import CategoryDetailPage from './pages/CategoryDetailPage'
import Wishlist from './pages/Account/Wishlist'
import Cart from './pages/Cart'
import Login from './pages/Account/Login'
import Signup from './pages/Account/Signup'
import ResetPassword from './pages/Account/ResetPassword'
import Admin from './pages/Admin'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/women" element={<CategoryPage />} />
        <Route path="/kids" element={<CategoryPage />} />
        <Route path="/baby" element={<CategoryPage />} />
        <Route path="/men/:productType/:productTypeCollection" element={<CategoryDetailPage />} />
        <Route path="/women/:productType/:productTypeCollection" element={<CategoryDetailPage />} />
        <Route path="/kids/:productType/:productTypeCollection" element={<CategoryDetailPage />} />
        <Route path="/baby/:productType/:productTypeCollection" element={<CategoryDetailPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/reset" element={<ResetPassword />} />
      </Route>

      <Route path="/login" element={<Login />} />
      

      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
