import { HeaderOnly } from '../components/Layout'
import { DefaultLayout } from '../components/Layout'

import Home from '../pages/Home'
import Nam from '../pages/Nam'
import Nu from '../pages/Nu'


const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/nam', component: Nam},
    { path: '/nu', component: Nu},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }