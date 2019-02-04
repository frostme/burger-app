import React, { Component } from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(ig => (
      <li key={ig}><span style={{textTransform: 'capitalize'}}>{ig}</span>: {this.props.ingredients[ig]}</li>
    ))
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
      </ul>
        <p><strong>Total Price: { this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </>
    )
  }
}

export default OrderSummary