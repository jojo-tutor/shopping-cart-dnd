import Login from './pages/Login'
import Signup from './pages/Signup'
import Auth from './pages/Auth'
import Home from './pages/Home'
import About from './pages/About'
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
        component: About,
        path: '/about',
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
