import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';


const Line = (data) => {
  const chartDom = useRef(null);
  const options = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };
  useEffect(() => {
    const mychart = echarts.getInstanceByDom(chartDom.current) || echarts.init(chartDom.current);
    mychart.setOption(options);
  }, [chartDom]);

  return (
    <div style={{width: '100%', height: '100%'}} ref={chartDom}></div>
  )
};

export default Line;