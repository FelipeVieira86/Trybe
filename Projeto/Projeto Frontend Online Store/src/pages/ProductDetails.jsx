import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import ProductImgs from '../components/ProductImgs';
import MoreInfo from '../components/MoreInfo';

import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { produto: null, reviews: null, rating: null };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ produto: result }));
    fetch(`https://api.mercadolibre.com/reviews/item/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({
        reviews: result,
        rating: result.rating_average,
      }));
  }

  render() {
    const { produto, reviews, rating } = this.state;
    const { addCart } = this.props;
    return produto ? (
      <div className="container">
        <Link className="backLink" to="/">Voltar</Link>
        <div className="productInfo">
          <ProductImgs pics={produto.pictures} />
          <MoreInfo produto={produto} addCart={addCart} reviews={reviews} rating={rating} />
        </div>
        {reviews ? <Reviews reviews={reviews.reviews} /> : null}
        <textarea data-testid="product-detail-evaluation" />
      </div>
    ) : (
      <div>Carregando...</div>
    );
  }
}

export default ProductDetails;
