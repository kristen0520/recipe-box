import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
  return(
  <div id="addContainer">

  <button
    className={["btn-primary"].join(" ")}
    onClick={props.click}>
    Add Recipe
  </button>

  </div>

)
}

export default AddButton;
