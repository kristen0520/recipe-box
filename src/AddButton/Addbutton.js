import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
  return(
  <div id="addbutton" className="col-12">

  <button
  className={["row", "btn-primary"].join(" ")}
  onClick={props.click}>
  Add Recipe</button>

  </div>

)
}

export default AddButton;
