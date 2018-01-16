import React from 'react';

import './UpdateForm.css'


const UpdateForm = (props) => {
  return(
<div id="container" className={props.vis} onClick={props.click}>

<form id="form" className={["col-8", "bg-primary", "border", "border-primary", "rounded"].join(" ")}>
  <h1>Update Recipe</h1>
  <input className="col-7" type="text" placeholder="ingredients, separated, by, commas" onChange={props.change}></input>
  <button type="submit" onClick={props.submit}>Submit</button>
</form>

</div>
)
}

export default UpdateForm;
