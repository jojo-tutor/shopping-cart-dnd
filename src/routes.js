import Login from './pages/Login'
import Signup from './pages/Signup'
import Authenticated from './pages/Authenticated'
import ShoppingCart from './pages/ShoppingCart'
import NotFound from './pages/NotFound'

export default  [
  {
    component: Login,
    key: 'app-login',
    path: '/login',
    exact: true
  },
  {
    key: 'app-signup',
    component: Signup,
    path: '/signup',
    exact: true
  },
  {
    component: Authenticated,
    path: '/',
    key: 'app',
    routes: [
      {
        component: ShoppingCart,
        path: '/',
        exact: true
      },
    ]
  },
  {
    component: NotFound,
    path: '*'
  }
]
