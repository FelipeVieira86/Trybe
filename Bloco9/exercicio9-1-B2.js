// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  const obj = {}
  obj.name = item.name
  obj.price = price
  return obj
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  let arr = []
  cart.forEach(cartItem => arr.push(cartItem))
  arr.push(item)
  return arr
};

module.exports = {
  setPrice,
  addToCart
}