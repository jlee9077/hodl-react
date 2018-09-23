export const pieChartData = (coinInfo) => {
  return coinInfo.map(coin => {
    return {
      key: coin.name,
      value: coin.circulating_supply
    }
  })
}

export const config = [
  { color: '#aaac84' },
  { color: '#dce7c5' },
  { color: '#e3a51a' },
];
