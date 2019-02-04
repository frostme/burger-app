import React, { Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    purchaseable: false,
    purchasing: false,
    totalPrice: 4
  }

  updatePurchaseState (ingredients){
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    }).reduce((sum, el) => sum + el, 0)

    const purchaseable = (sum > 0)

    this.setState({
      purchaseable: purchaseable
    })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })

    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    let disabled = false
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount - 1
    if(updatedCount < 0) disabled = true
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceAddition

    if(!disabled){
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      })
    }

    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler(){
    this.setState({purchasing: true})
  }

  purchaseCancelHandler(){
    this.setState({purchasing: false })
  }

  purchaseContinueHandler(){
    alert('You continue!')
  }

  render(){
    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={() => this.purchaseCancelHandler()}>
          <OrderSummary totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} purchaseCancel={() => this.purchaseCancelHandler()} purchaseContinue={() => this.purchaseContinueHandler()} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls price={this.state.totalPrice} add={this.addIngredientHandler} remove={this.removeIngredientHandler} purchaseable={this.state.purchaseable} purchase={() => this.purchaseHandler()}/>
      </>
    )
  }
}

export default BurgerBuilder
