import { lazy } from "react";
import Layout from '../components/Layout';
import Home from '../views/Home';
import Login from '../components/Login';
const Equipment = lazy(() => import('../views/Equipment'));
const Board = lazy(() => import('../views/Board'));

const routes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/board',
        element: <Board />,
        key: '/board',
        label: '数据看板'
      },
      {
        path: '/equipment',
        element: <Equipment />,
        key: '/equipment',
        label: '设备列表'
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes;