import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'
import App from './App'
import ShoppingCart from '../ShoppingCart'
import { TodoList } from './Todo'

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
    component: App,
    path: '/',
    key: 'app',
    routes: [
      {
        component: ShoppingCart,
        path: '/',
        exact: true
      },
      {
        component: TodoList,
        path: '/todo',
        exact: true
      },
    ]
  },
  {
    component: NotFound,
    path: '*'
  }
]