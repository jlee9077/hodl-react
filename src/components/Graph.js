import React from 'react';
import { PieChart, Legend } from 'react-easy-chart';



const Graph = props => {
  const pieData = [
    {key: 'BitCoin', value: 100, color: '#aaac84'},
    {key: 'LiteCoin', value: 200, color: '#dce7c5'},
    {key: 'NameCoin', value: 50, color: '#e3a51a'}
  ];

  const config = [
    {color: '#aaac84'},
    {color: '#dce7c5'},
    {color: '#e3a51a'}
  ];
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

  return info ? (
    <div>
      GRAPHING SOON {info.name}
      <PieChart data={pieData} size={300} />
      <Legend data={pieData} dataId={'key'} config={config} horizontal />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Graph;
