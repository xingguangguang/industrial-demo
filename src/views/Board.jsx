import * as echarts from 'echarts';
import { useRef } from 'react';
import Pie from '../components/Charts/Pie';
import Bar from '../components/Charts/Bar';
import Line from '../components/Charts/Line';
import './Board.css';

const Board = () => {

  return (
    <div className="board">
      <div className="first">
        <Pie className='pie pie1' />
        <Pie className='pie pie2' />
      </div>
      <div className="second">
        <div className="center-top">
          <div className="text">
            <div className="title">今日产量(t)</div>
            <div className="number">46</div>
          </div>
          <div className="text">
            <div className="title">本月产量(t)</div>
            <div className="number">537</div>
          </div>
        </div>
        <div className="center-bottom">
          <div className='line line1'>
            <Line />
          </div>
          <div className='line line2'>
            <Line />
          </div>
        </div>
      </div>
      <div className="third">
        <Bar className='bar bar1' />
        <Bar className='bar bar2' />
        <Bar className='bar bar3' />
      </div>
    </div>
  )
};

export default Board;