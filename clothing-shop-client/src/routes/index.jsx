import { DefaultLayout } from '../components/Layout'

import Home from '../pages/Home'
import CategoryPage from '../pages/CategoryPage'
import Login from '../pages/Account/Login'
import ResetPassword from '../pages/Account/ResetPassword'
import Signup from '../pages/Account/Signup'
import Wishlist from '../pages/Account/Wishlist'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'
import Admin from '../pages/Admin'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/men', component: CategoryPage },
    { path: '/women', component: CategoryPage },
    { path: '/kid', component: CategoryPage },
    { path: '/baby', component: CategoryPage },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup },
    { path: '/password/reset', component: ResetPassword },
    { path: '/wishlist', component: Wishlist },
    { path: '/cart', component: Cart },
    { path: '/product/:productIdPath', component: ProductDetail },
    { path: '/admin', component: Admin, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }