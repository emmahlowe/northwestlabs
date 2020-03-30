import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
import { produce } from "immer";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.actions = {
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      getCartTotal: this.getCartTotal,
      clearCart: this.clearCart
    };

    this.state = {
      products: [],
      categories: [],
      cart: {},
      cartCount: 0
    };
  }

  addToCart = pid => {
    // get current quantity from this.state.cart
    //const qty = this.state.cart[pid]; //this is just reading state not changing it
    // set the new cart
    //if you change state and theres a deep object you need to use something like this to change it
    this.setState(state =>
      produce(state, draft => {
        if (!draft.cart[pid]) {
          draft.cart[pid] = 1;
          draft.cartCount += 1;
        } else if (pid in draft.cart) {
          draft.cart[pid] += 1;
          draft.cartCount += 1;
        }
      })
    );
  };

  clearCart = () => {
    this.setState(state =>
      produce(state, draft => {
        draft.cartCount = 0;
        draft.cart = {};
      }))
  };

  getCartTotal = () => {
    let total = 0;
    
      Object.entries(this.state.cart).forEach(([id, qty]) => {
        total += this.state.products.find(p => p.id === parseInt(id)).price * qty;
      })

      return total;
  };

  removeFromCart = pid => {
    this.setState(state =>
      produce(state, draft => {
        draft.cartCount -= draft.cart[pid];
        delete draft.cart[pid];
      })
    );
  };

  render() {
    // if (Object.keys(this.state.categories).length)
    if (!this.state.categories) {
      return <div>Loading...</div>;
    }
    //use context hook
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }

  async componentDidMount() {
    const category = await axios.get("http://localhost:8000/api/category/");
    const products = await axios.get("http://localhost:8000/api/product/");
    this.setState({
      categories: category.data.map(category => ({
        ...category,
        count: products.data.filter(product => category.id === product.category)
          .length
      })),
      products: products.data
    });
  }
  //this gets called one time immediately after its first render
}
