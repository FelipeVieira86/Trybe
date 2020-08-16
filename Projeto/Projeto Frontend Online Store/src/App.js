import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import List from './pages/ProductList';
import SearchBar from './components/SearchBar';
import Categoria from './pages/Categorias';
import Cart from './pages/ShoppingCart';
import Details from './pages/ProductDetails';

import cartImage from './images/shopping-cart.png';
import './styles/App.css';
import Checkout from './pages/FinalizarCompra';
import CartIcon from './components/ShoppingCartIcon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: null, category: null, value: null, cart: [], cartSize: 0 };
    this.getCategory = this.getCategory.bind(this);
    this.getValue = this.getValue.bind(this);
    this.resetCategory = this.resetCategory.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.addCart = this.addCart.bind(this);
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.loadCart = this.loadCart.bind(this);
  }

  componentDidMount() {
    this.loadCart();
  }

  componentDidUpdate() {
    const { cart, cartSize } = this.state;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartSize', cartSize);
  }

  async getValue(selectedValue) {
    await this.setState({ value: selectedValue });
    this.makeSearch();
  }

  async getCategory(selectedcategory) {
    await this.setState({ category: selectedcategory });
    this.makeSearch();
  }

  async resetCategory() {
    await this.setState({ category: null });
    this.makeSearch();
  }

  async makeSearch() {
    const { category, value } = this.state;
    const returnValue = await getProductsFromCategoryAndQuery(category, value);
    this.setState({ search: returnValue });
  }

  addCart(product, qnt) {
    const { cart, cartSize } = this.state;
    if (cart.some((prod) => prod.product === product)) {
      const newProd = cart.find((prod) => prod.product === product);
      if (newProd.product.available_quantity > newProd.quantity) {
        newProd.quantity += qnt;
        const arrayIndex = cart.indexOf(cart.find((prod) => prod.product === product));
        cart.splice(arrayIndex, arrayIndex + 1);
        this.setState({ cart: [...cart, newProd], cartSize: Number(cartSize) + Number(qnt) });
      }
    } else {
      this.setState({
        cart: [...cart, { product, quantity: qnt }],
        cartSize: Number(cartSize) + Number(qnt),
      });
    }
  }

  inc(product) {
    const { cart, cartSize } = this.state;
    const newProd = cart.find((prod) => prod.product.id === product.product.id);
    if (newProd.product.available_quantity > newProd.quantity) {
      newProd.quantity += 1;
      const arrayIndex = cart.indexOf(cart.find((prod) => prod.product.id === product.product.id));
      cart.splice(arrayIndex, arrayIndex + 1);
      this.setState({ cart: [...cart, newProd], cartSize: Number(cartSize) + 1 });
    }
  }

  dec(product) {
    const { cart, cartSize } = this.state;
    const newProd = cart.find((prod) => prod.product.id === product.product.id);
    if (newProd.product.available_quantity > newProd.quantity) {
      newProd.quantity -= 1;
      const arrayIndex = cart.indexOf(cart.find((prod) => prod.product.id === product.product.id));
      cart.splice(arrayIndex, arrayIndex + 1);
      this.setState({ cart: [...cart, newProd], cartSize: Number(cartSize) - 1 });
    }
  }

  loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const size = localStorage.getItem('cartSize');
    this.setState({ cart: cart || [], cartSize: Number(size) || 0 });
  }

  render() {
    const { search, value, cart, cartSize } = this.state;
    return (
      <BrowserRouter>
        <div className="main">
          <CartIcon cartImage={cartImage} cartSize={cartSize} />
          <div className="search-box"><SearchBar onClick={this.getValue} /></div>
          <div className="products">
            <Categoria onClick={this.getCategory} reset={this.resetCategory} value={value} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <List {...props} value={search} addCart={this.addCart} />}
              />
              <Route
                path="/cart"
                render={(props) => <Cart {...props} cart={cart} inc={this.inc} dec={this.dec} />}
              />
              <Route
                path="/details/:id"
                render={(props) => <Details {...props} addCart={this.addCart} />}
              />
              <Route path="/checkout" render={(props) => <Checkout {...props} cart={cart} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
