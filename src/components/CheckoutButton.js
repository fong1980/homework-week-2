// src/components/CheckoutButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CheckoutButton extends PureComponent {
  static propTypes = {
    checkTotal:PropTypes.func.isRequired
  }

  render() {

    const {calcTotal,total} = this.props
    console.log(total)
    return (
      <div>
      <button onClick={this.props.checkTotal}>Checkout</button>
      <p>{total}</p>
      </div>
    )
  }
}

export default CheckoutButton
