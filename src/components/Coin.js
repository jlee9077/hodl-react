import React, { Component } from 'react';
import axios from 'axios';
import apiPub  from './ApiPub';

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
    const { coins } = this.state;
    return coins ? (
      <div>
        {coins.map(coin => {
          return (
            <li key={coin.id}>
              <ul>
                {coin.name} {coin.symbol} {coin.quotes.USD.price}
              </ul>
            </li>
          );
        })}
      </div>
    ) : (
      <div>LOADING</div>
    );
  }
}
