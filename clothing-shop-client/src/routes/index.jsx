import { HeaderOnly } from '../components/Layout'
import { DefaultLayout } from '../components/Layout'

import Home from '../pages/Home'
import Nam from '../pages/Nam'
import Nu from '../pages/Nu'
import Kid from '../pages/Kid'
import Baby from '../pages/Baby'


const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/men', component: Nam},
    { path: '/women', component: Nu},
    { path: '/kid', component: Kid},
    { path: '/baby', component: Baby},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }