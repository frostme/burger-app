import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const classes = {
  BuildControls: 'BuildControls',
  OrderButton: 'OrderButton'
}

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl key={control.label} label={control.label} add={() => props.add(control.type)} remove={() => props.remove(control.type)} />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.purchase}>ORDER NOW</button>
  </div>
)

export default BuildControls;
