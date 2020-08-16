import React from 'react';
import { Link } from 'react-router-dom';
import CarrinhoVazinho from './CarrinhoVazio';
import QuantidadeCarrinho from '../components/QuantidadeCarrinho';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { cart } = this.props;
    this.state = { products: cart, total: 0 };
    this.loadCart = this.loadCart.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    this.loadCart();
  }

  componentDidUpdate(prevProp, prevState) {
    const { products } = this.state;
    if (prevState.products !== products) this.getTotal();
  }

  getTotal(qnt, gambiarra) {
    const { products } = this.state;
    const total = products
      .reduce((acc, produto) => (acc + (produto.product.price
        * (qnt + gambiarra || produto.quantity))), 0);
    this.setState({ total: total.toFixed(2) });
  }

  loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products: cart || [] });
  }

  render() {
    const { inc, dec } = this.props;
    const { products, total } = this.state;
    if (products.length === 0) return <CarrinhoVazinho />;
    return (
      <div className="shoppingCart">
        <Link to="/">Voltar</Link>
        {products
          ? products.map((product) => (
            <div className="shoppingCartContainer" key={product.product.id}>
              <img src={product.product.thumbnail} alt="product thumbnail" />
              <div className="shoppingCartTitle" data-testid="shopping-cart-product-name">
                {product.product.title}
              </div>
              <QuantidadeCarrinho
                max={product.product.available_quantity} inc={inc} dec={dec}
                qnt={product.quantity} produto={product} getTotal={this.getTotal}
              />
            </div>
          ))
          : null}
        {products.length > 0 ? <div className="total">{`Total: R$${total}`}</div> : null}
        <div className="cartBtnContainer">
          <Link className="FinalizarCompra" to="/checkout" data-testid="checkout-products">
            Finalizar Compra
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
