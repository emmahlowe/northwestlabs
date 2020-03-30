import React from 'react';
import CartItems from "./CartItems";
import {
  Link
} from "react-router-dom";

function LoadCart() {
      return (
        <>
          <h1>Shopping Cart</h1>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <CartItems></CartItems>
          </table>
          <Link className="btn btn-success" to="/checkout">Checkout</Link>

        </>
      );
}


export default LoadCart;