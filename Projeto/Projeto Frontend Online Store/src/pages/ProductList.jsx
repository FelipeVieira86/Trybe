import React from 'react';
import ProductInfo from '../components/ProductInfo';

class ProductList extends React.Component {
  render() {
    const { value, addCart } = this.props;
    return value === null ? (
      <div className="product-list">
        <div className="hidden" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    ) : (
      <div className="product-list">
        {value.results.map((produto) => (
          <ProductInfo key={produto.id} produto={produto} addCart={addCart} />
        ))}
      </div>
    );
  }
}

export default ProductList;
