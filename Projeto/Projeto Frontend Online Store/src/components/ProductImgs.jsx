import React, { Component } from 'react';

import '../styles/ProductDetails.css';

export default class ProductImgs extends Component {
  constructor(props) {
    super(props);
    const { pics } = this.props;
    this.state = { pics, index: 0 };
  }

  render() {
    const { pics, index } = this.state;
    return (
      <div className="picContainer">
        <div className="picSlides">
          {pics.map((pic, i) => (
            <div key={pic.id} className="picPreviewContainer">
              <img
                onMouseEnter={() => this.setState({ index: i })}
                className="picPreview"
                src={pic.url}
                alt="imagem do produto"
              />
            </div>
          ))}
        </div>
        <div className="bigPicContainer">
          <img className="bigPic" src={pics[index].url} alt="imagem do produto" />
        </div>
      </div>
    );
  }
}
