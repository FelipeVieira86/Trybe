import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductInfo extends React.Component {
  render() {
    const {
      produto, addCart,
      produto: { thumbnail },
    } = this.props;
    return (
      <div data-testid="product" className="product">
        <Link to={`/details/${produto.id}`} className="prodLink" data-testid="product-detail-link">
          <div className="productImgContainer">
            <img className="productImg" src={thumbnail.replace(/-I/i, '-O')} alt={produto.title} />
          </div>
          <div className="productTitle">{produto.title}</div>
          <div className="productPrice">{`R$${produto.price.toFixed(2)}`}</div>
          {produto.shipping.free_shipping ? (
            <div className="free-shipping" data-testid="free-shipping">
              Entrega grátis
            </div>
          ) : null}
        </Link>
        <Button
          className="ListBtn" testId="product-add-to-cart"
          produto={produto} addCart={addCart} qnt={1}
        />
      </div>
    );
  }
}

export default ProductInfo;
