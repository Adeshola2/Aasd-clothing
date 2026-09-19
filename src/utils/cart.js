const CART_KEY = "aasd_cart";

export const getCart = () => {

  const cart = localStorage.getItem(CART_KEY);

  return cart ? JSON.parse(cart) : [];
};


export const saveCart = (cart) => {

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  );
};


export const addToCart = (product, quantity = 1) => {

  const cart = getCart();

  const existingProduct = cart.find(
    item => item.id === product.id
  );

  if (existingProduct) {

    existingProduct.quantity += quantity;

  } else {

    cart.push({
      ...product,
      quantity
    });

  }

  saveCart(cart);

  return cart;
};


export const removeFromCart = (productId) => {

  const cart = getCart().filter(
    item => item.id !== productId
  );

  saveCart(cart);

  return cart;
};


export const updateQuantity = (
  productId,
  quantity
) => {

  const cart = getCart();

  const product = cart.find(
    item => item.id === productId
  );

  if (product) {

    product.quantity = Math.max(
      1,
      quantity
    );

  }

  saveCart(cart);

  return cart;
};


export const clearCart = () => {

  localStorage.removeItem(CART_KEY);

  return [];
};


export const getCartTotal = () => {

  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
};