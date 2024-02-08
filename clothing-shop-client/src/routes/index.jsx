import { DefaultLayout } from '../components/Layout'

import Home from '../pages/Home'
import Man from '../pages/Man'
import Woman from '../pages/Woman'
import Kid from '../pages/Kid'
import Baby from '../pages/Baby'
import Login from '../pages/Login'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/men', component: Man },
    { path: '/women', component: Woman },
    { path: '/kid', component: Kid },
    { path: '/baby', component: Baby },
    { path: '/login', component: Login, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }