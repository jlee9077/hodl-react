import React, { Component } from 'react';
import axios from 'axios';
import apiPub  from './ApiPub';
import images from './Img'

export default class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(apiPub)
    this.setState({
      coins: response.data.data,
    });
  }

  render() {
    debugger
    const { coins } = this.state;
    return coins ? (
      <div>
        {coins.map(coin => {
          return (
            <li key={coin.id}>
            <img src={images[coin.symbol]}/>
               {coin.name} {coin.symbol} {coin.quotes.USD.price}
            </li>
          );
        })}
      </div>
    ) : (
      <div>LOADING</div>
    );
  }
}
