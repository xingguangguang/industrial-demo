import { Form, Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = values => {
    const { username, password } = values;
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('token', username);
      navigate('/');
    } else {
      messageApi.open({
        type: 'error',
        content: '登录失败，账号或密码错误'
      });
      form.resetFields();
    }
  };
  return (
    <>
      {contextHolder}
      <Form
        form={form}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onFinish={onFinish}
        style={{maxWidth: 600,margin: '300px auto'}}
        >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '输入用户名'
            }
          ]}
          >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '输入密码'
            }
          ]}
          >
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;