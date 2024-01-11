import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import RequireAuth from './RequireAuth';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
const { Header, Content } = Layout;

const App = () => {
  const navigate = useNavigate();
  // 菜单列表
  const menuList = routes.find(v => v.path === '/').children;

  // 路由跳转
  const toggleMenu = ({key}) => {
    navigate(key);
  };

  return (
    <Layout style={{backgroundColor: 'white'}}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuList}
          style={{display: 'flex'}}
          onClick={toggleMenu}
          />
      </Header>
      <Content style={{height: 'calc(100vh - 64px)', overflowY: 'auto', overflowX: 'hidden', backgroundColor: 'white', padding: '20px 30px'}}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default RequireAuth(App);
