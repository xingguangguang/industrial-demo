import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';


const Bar = (data) => {
  const chartDom = useRef(null);
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
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

export default Bar;