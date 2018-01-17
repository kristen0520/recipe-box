import React from 'react';
import './Recipe.css';
import UpdateForm from '../UpdateForm/UpdateForm'
import AddButton from '../AddButton/Addbutton'

const Recipe = (props) => {

let r = props.recipes;
let show = "";
if(props.show){show=props.show}

var recipeKeys = Object.keys(r);

const recipeVals = recipeKeys.map((recipeKeys, index) =>

<div>

    <h3 onClick={props.handleNameClick} id={recipeKeys} className={[
      "border", "border-success", "bg-success", "rounded"].join(' ')}
      data-toggle="collapse" data-target={"#" + "p" + recipeKeys}
  >{recipeKeys}</h3>


<div id={"p" + recipeKeys} className="collapse">
    <div id={recipeKeys} className={[
      "ingr", recipeKeys].join(' ')}>
    {r[recipeKeys].map((ingr) =>
        <li>{ingr}</li>
      )}
    <button className="btn-warning" id={recipeKeys} onClick={props.updateClick}>Edit</button>

    <button className="btn-danger" id={recipeKeys} onClick={props.deleteClick}>Delete</button>
    </div>
    </div>
  </div>
);

  return(
  <div className={["container", "col-lg-10", "col-md-10", "col-sm-12", "col-xs-12", "card", "card-body"].join(" ")}>
  {recipeVals}
  </div>
)
}

export default Recipe
