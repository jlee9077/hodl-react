import React from 'react';
import { PieChart, Legend } from 'react-easy-chart';

import {
  pieChartData,
  config
} from '../utils'

const Graph = props => {
  const { info } = props;
  const pieChartInfo = pieChartData(info)

  return info ? (
    <div>
      GRAPHING SOON {info.name}
      <PieChart data={pieChartInfo} size={300} />
      <Legend data={pieChartInfo} dataId={'key'} config={config} horizontal />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Graph;
