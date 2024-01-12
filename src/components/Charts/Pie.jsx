import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';


const Pie = (data) => {
  const chartDom = useRef(null);
  const options = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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

export default Pie;