import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Help from './pages/Help'
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
    component: Auth,
    path: '/',
    key: 'app',
    routes: [
      {
        component: Home,
        path: '/',
        key: 'home',
        exact: true
      },
      {
        component: Help,
        path: '/help',
        exact: true
      },
      {
        component: NotFound,
        path: '*'
      }
    ]
  },
  {
    component: NotFound,
    path: '*'
  }
]
