import React, { Component } from 'react';

export default class CartItemQnt extends Component {
  constructor(props) {
    super(props);
    const { qnt } = this.props;
    this.state = { qnt: qnt || 1 };
  }

  async increase() {
    const { qnt } = this.state;
    const { max, inc, produto, getTotal } = this.props;
    if (qnt < max) {
      await this.setState({ qnt: Number(qnt) + 1 });
      inc(produto);
      getTotal(qnt, 1);
    }
  }

  async decrease() {
    const { dec, produto, getTotal } = this.props;
    const { qnt } = this.state;
    if (qnt > 0) {
      await this.setState({ qnt: Number(qnt) - 1 });
      dec(produto);
      getTotal(qnt, -1);
    }
  }

  render() {
    const { produto: { product } } = this.props;
    const { qnt } = this.state;
    return (
      <div className="quantityContainer">
        <div className="cartQuantity">
          <button
            className="buttonQty"
            onClick={() => { this.decrease(); }}
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <div data-testid="shopping-cart-product-quantity">{qnt}</div>
          <button
            className="buttonQty"
            onClick={() => this.increase()}
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
        <div className="shoppingCartPrice">
          {`R$${(product.price * qnt).toFixed(2)}`}
        </div>
      </div>
    );
  }
}
