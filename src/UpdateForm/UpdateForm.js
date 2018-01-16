import React from 'react';

import './UpdateForm.css'


const UpdateForm = (props) => {
  return(
<div id="container" className={props.vis} onClick={props.click}>
<form id="form">
  <h1>Update Recipe</h1>
  <input type="text" onChange={props.change}></input>
  <button type="submit" onClick={props.submit}>Submit</button>
</form>
</div>
)
}

export default UpdateForm;
