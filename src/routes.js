import Login from './pages/Login'
import Signup from './pages/Signup'
import Authenticated from './pages/Authenticated'
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
    component: Authenticated,
    path: '/',
    key: 'app',
    routes: [
      {
        component: Home,
        path: '/',
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
