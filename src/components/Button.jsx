import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="add-btn">{props.children}</button>
    </div>
  )
}

export default Button