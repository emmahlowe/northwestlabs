import React from 'react';
import AppContext from "./context";

function CartItems(props) {
  const context = React.useContext(AppContext);
  return context.products
   .filter(val => {
     if (context.cart[val.id]) {
        return  val.id;
       } 
     })
    .map(p => {
      return (
        <tbody key={p.id}>
          <tr>
            <th scope="row"><img src={'/media/products/' + p.filename + '-1.png'} alt={p.name} style={{width: "100px",height: "100px"}} className="img-thumbnail rounded-sm"></img></th>
            <th scope="row">{p.name}</th>
            <th scope="row">{context.cart[p.id]}</th>
            <th scope="row">${p.price}</th>
            <th scope="row">${(p.price * context.cart[p.id]).toFixed(2)}</th>
            <th scope="row"><button className="btn btn-outline btn-light" 
            onClick={e => {
                context.removeFromCart(p.id)
            }}>Remove</button></th>
          </tr>
        </tbody>
        )}
      );
}

export default CartItems;