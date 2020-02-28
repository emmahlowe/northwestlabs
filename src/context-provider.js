import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      //functions here
    };
    this.state = {
      categories: [],
      products: []
    };
    //loading the categories here is a bad idea...
    //it would freeze the system
  }

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
          count: products.data.filter(product => category.id === product.category).length
        })),
        products: products.data
      });
  }
  //this gets called one time immediately after its first render
}
