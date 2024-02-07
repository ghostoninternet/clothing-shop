import { DefaultLayout } from '../components/Layout'

import Home from '../pages/Home'
import Man from '../pages/Man'
import Woman from '../pages/Woman'
import Kid from '../pages/Kid'
import Baby from '../pages/Baby'

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/men', component: Man },
    { path: '/women', component: Woman},
    { path: '/kid', component: Kid},
    { path: '/baby', component: Baby},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }