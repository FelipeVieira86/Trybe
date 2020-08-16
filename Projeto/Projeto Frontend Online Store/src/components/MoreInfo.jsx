/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-max-props-per-line */
import React, { Component } from 'react';
import Button from './Button';
import Rating from './Rating';

const estado = {
  new: 'Novo',
  used: 'Usado',
};

export default class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { qnt: 1 };
  }

  render() {
    const { qnt } = this.state;
    const { addCart, produto: { condition, title, price }, produto, reviews, rating } = this.props;
    return (
      <div className="itemDetail">
        <div className="itemConditions">{`${estado[condition]} - ${produto.sold_quantity} vendidos`}</div>
        <div data-testid="product-detail-name" className="title">{title}</div>
        <Rating rating={rating} reviews={reviews} />
        <div className="price">
          <span>{`R$ ${Math.floor(price)}`}</span>
          <span className="decimal">{(price % 1).toFixed(2) * 100}</span>
        </div>
        {produto.accepts_mercadopago ? (
          <div className="extraInfo">em
            <span className="parcela">{` 12x ${(price / 12).toFixed(2)} sem juros`}</span>
          </div>
        ) : null}
        <div className="quantidade">Quantidade
          <input
            className="inputQnt" type="number" value={qnt} max={produto.available_quantity}
            onChange={({ target }) => this.setState({ qnt: target.value })}
          />
          <span className="disponivel">{`  (${produto.available_quantity} disponíveis)`}</span>
        </div>
        <Button
          className="addCarrinho" testId="product-detail-add-to-cart"
          produto={produto} addCart={addCart} qnt={qnt}
        />
      </div>
    );
  }
}
