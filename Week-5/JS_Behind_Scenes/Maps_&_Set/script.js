let productViews = new WeakMap();
let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
  if (productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
    console.log(`${productId.id} viewed ${productViews.get(productId)} times`);
  } else {
    productViews.set(productId, 1);
    console.log(`${productId.id} viewed ${productViews.get(productId)} times`);
  }
};

const addToCart = (productId) => {
  if (cartItems.has(productId)) {
    console.log("Product already in cart");
  } else {
    cartItems.add(productId);
    console.log("Product added to cart");
  }
};

const product1 = { id: 123 };
const product2 = { id: 23 };
const product3 = { id: 28 };

incrementProductViews(product1);
incrementProductViews(product1);
incrementProductViews(product2);
incrementProductViews(product3);
incrementProductViews(product3);

addToCart(product1);
addToCart(product1);
