import React from 'react'
import './Button.css'

const classes = {
  Button: 'Button',
  Success: 'Success',
  Danger: 'Danger'
}

const Button = (props) => (
  <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
);

export default Button
