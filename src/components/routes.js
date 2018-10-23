import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'
import App from './App'

export default  [
  {
    component: App,
    path: '/',
    exact: true,
    key: 'app',
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      }
    ]
  },
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
    component: NotFound,
    path: '*'
  }
]