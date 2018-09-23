import React from 'react';
import {PieChart} from 'react-easy-chart'

const Graph = props => {
  // const { name, symbol, quotes, circulating_supply } = props.info;
  const { info } = props;
  console.log('Info', info);
//   return info ? (
//     <div>
//       {info.map(i => {
//         <div>HELLOOOOOOOOO {i.name}</div>;
//       })}
//     </div>
//   ) : (
//     <div>Loading</div>
//   );

  return info ?(
    <div>GRAPHING SOON {info.name}</div>
  ) : <div>Loading</div>
};

export default Graph;
