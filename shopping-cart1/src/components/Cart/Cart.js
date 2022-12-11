import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import "./cart.css";
import CartEmpty from "./CartEmpty";
export default class Cart extends Component {
  render() {
    let table_item;
    //console.log(this.props);

    if (!this.props.cart.length) return <CartEmpty />;
    if (this.props.cart.length > 0) {
      table_item = this.props.cart.map((item, index) => {
        return (
          <CartItems
            key={index}
            item={item}
            index={index}
            decrement={this.props.decrement}
            removefromCart={this.props.removefromCart}
            increment={this.props.increment}
          />
        );
      });
    }

    return (
      <div className="text-center">
        <h1>My Cart</h1>
        <table className="table cart-table">
          <thead>
            <tr>
              <th scope="col">Total</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price/Unit</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {table_item}
            <tr>
              <td className="font-weight-bold">Total</td>
              <td />
              <td />
              <td />
              <td>
                <p className="Total-Price">{this.props.totalPrice}</p>
                <Link className="Checkout-Button-Text" to="/checkout">
                  <div className="Checkout-Button">Checkout</div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
