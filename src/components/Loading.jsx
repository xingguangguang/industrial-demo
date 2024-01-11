import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="h-screen flex_c justify_c">
      <Spin />
    </div>
  );
};

export default Loading;
