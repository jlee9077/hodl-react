import React, { Component } from 'react';
import axios from 'axios';
import apiPub from './ApiPub';
import images from './Img';
import Graph from './Graph'
import CoinCss from '../Coin.css'

export default class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const response = await axios.get(apiPub);
    this.setState({
      coins: response.data.data,
    });
  }

  handleClick () {

  }

  render() {
    const { coins } = this.state;
    return coins ? (
      <div>
        <button>Graphs</button>
        <div id="parentContainer">
        {coins.map(coin => {
          return (
            <div id="bitCoinInfo" key={coin.id}>
              <img src={images[coin.symbol]} width="35"/>
              <div id="crypto">{coin.name} {coin.symbol} {coin.quotes.USD.price}</div>
            </div>
          );
        })}
        </div>
        <Graph info={coins}/>
      </div>
    ) : <div>Loading</div>
  }
}
