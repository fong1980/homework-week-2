//CartItem

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import "./cartitem.css"

class CartItem extends PureComponent {
  static propTypes = {
    onPlusClick: PropTypes.func.isRequired
  }
  render() {
    const { name, price, quantity, incrementQuantity,onPlusClick } = this.props

      return (
        <div>
          <li className="list">
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="quantitytext">quantity:</p>
            <p className="quantity">{quantity}</p>
            <button className="plusOne" onClick={this.props.onPlusClick}>+</button>
          </li>
        </div>
      )
  }
}
export default CartItem
