import Home from './Home'
import Login from './Login'

export default  [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Login,
    path: '/login'
  }
]