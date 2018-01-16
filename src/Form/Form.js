import React from 'react';
import './Form.css'

const Form = (props) => {
  return(

<div id="container" className={props.vis} onClick={props.click}>


    <div
    onClick={props.outsideClick} className={[props.vis].join(' ')}>
    <div className={["form", props.vis].join(' ')}>

  <form id="form" onSubmit={props.submit}>
    Name:
    <br></br>
    <input type="text" name="addname" onChange={props.changeName}></input>
    <br></br>
    Ingredients:
    <br></br>
    <input type="text" name="addingredients" onChange={props.changeIng}></input>
    <br></br>
    <button type="submit">Submit</button>
    </form>
  </div>
  </div>


  </div>

)
}

export default Form;
