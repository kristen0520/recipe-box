import React from 'react';
import './Form.css'

const Form = (props) => {
  return(

<div id="container" className={props.vis} onClick={props.click}>


    <div
    onClick={props.outsideClick} className={[props.vis].join(' ')}>
    <div className={["form", props.vis].join(' ')}>

  <form id="form" className={["bg-primary", "col-md-8", "col-xs-12", "border", "border-primary", "rounded"].join(" ")} onSubmit={props.submit}>
    <h3>Name:</h3>
    <input className="col-7" type="text" name="addname" placeholder="name of recipe"
    onChange={props.changeName}></input>
    <br></br>
    <h3>Ingredients:</h3>
    <input className="col-7" type="text" name="addingredients" placeholder="ingredients, separated, by, commas" onChange={props.changeIng}></input>
    <br></br>
    <br></br>
    <button id="submit" type="submit">Submit</button>
    </form>
  </div>
  </div>


  </div>

)
}

export default Form;
