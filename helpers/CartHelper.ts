const CartLocalKey = "MarketCart";

type PricesFace = {
  type: string;
  price: number;
};

type ProductFaceCart = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
};

const CartHelper = {
  addToCart: (product: ProductFaceCart) => {
    var cartArr: Array<ProductFaceCart> = CartHelper.getCart();
    var isAdd = false;

    product.quantity = 1;
    product.total = product.price;

    if (cartArr === null) {
      cartArr = [];
      cartArr.push(product);
    } else {
      cartArr.map((item) => {
        if (Number(item.id) === Number(product.id)) {
          item.quantity = Number(item.quantity) + 1;
          item.total = item.price * item.quantity;
          item.total = Number(item.total.toFixed(2));
          isAdd = true;
        }
      });

      if (!isAdd) {
        cartArr.push(product);
      }
    }

    localStorage.setItem(CartLocalKey, JSON.stringify(cartArr));

    return true;
  },

  removeToCart: (productId: number, all?: boolean) => {
    var cartArr: Array<ProductFaceCart> = CartHelper.getCart();

    cartArr.map((item) => {
      if (Number(item.id) === productId) {
        if (all) {
          item.quantity = 0;
        } else {
          item.quantity = item.quantity - 1;
          item.total = item.price * item.quantity;
          item.total = Number(item.total.toFixed(2));
        }
      }
    });

    var newCartArr = cartArr.filter(function isZero(item) {
      return item.quantity > 0;
    });

    localStorage.setItem(CartLocalKey, JSON.stringify(newCartArr));
  },

  getTotalPrice: () => {
    var cartArr: Array<ProductFaceCart> = CartHelper.getCart();
    var total = 0;

    if (cartArr) {
      cartArr.map((item) => {
        total = total + item.total;
      });
    }

    return Number(total.toFixed(2));
  },

  getTotalQuantity: () => {
    var cartArr: Array<ProductFaceCart> = CartHelper.getCart();
    var total = 0;

    if (cartArr) {
      cartArr.map((item) => {
        total = total + item.quantity;
      });
    }

    return Number(total);
  },

  getCart: () => {
    try {
      var cart = JSON.parse(localStorage.getItem(CartLocalKey));
    } catch (err) {
      var cart = null;
    }

    console.log(cart);
    return cart;
  },

  removeAll: () => {
    localStorage.setItem(CartLocalKey, null);
  },
};

export default CartHelper;
