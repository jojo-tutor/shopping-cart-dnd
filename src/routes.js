import loadable from '@loadable/component'

const Login = loadable(() => import('./pages/Login'))
const Signup = loadable(() => import('./pages/Signup'))
const Main = loadable(() => import('./Main'))
const Home = loadable(() => import('./pages/Home'))
const About = loadable(() => import('./pages/About'))
const NotFound = loadable(() => import('./pages/NotFound'))

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
    component: Main,
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
