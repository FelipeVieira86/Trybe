import React from 'react';
import { Link } from 'react-router-dom';

class CarrinhoVazio extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <div className="empty-cart" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default CarrinhoVazio;
