import React from 'react';
import './Recipe.css';
import UpdateForm from '../UpdateForm/UpdateForm'

const Recipe = (props) => {

let r = props.recipes;
let show = "";
if(props.show){show=props.show}

var recipeKeys = Object.keys(r);

const recipeVals = recipeKeys.map((recipeKeys, index) =>

<div>

    <h3 onClick={props.handleNameClick} id={recipeKeys} className={[
      "border", "border-primary", "bg-success", "rounded", "col-lg-offset-2", "col-md-offset-2",
      "col-12", "col-xs-12", "col-sm-12", "col-lg-8"].join(' ')}
      data-toggle="collapse" data-target={"#" + "p" + recipeKeys}
  >{recipeKeys}</h3>


<div id={"p" + recipeKeys} className="collapse">
    <div id={recipeKeys} className={[
      "ingr", "col-lg-offset-2", recipeKeys, "col-12", "col-xs-12",
       "col-sm-12", "col-lg-8"].join(' ')}>
    {r[recipeKeys].map((ingr) =>
        <li>{ingr}</li>
      )}
    <button className="btn-primary" id={recipeKeys} onClick={props.updateClick}>Edit!!</button>

    <button className="btn-danger" id={recipeKeys} onClick={props.deleteClick}>Delete</button>
    </div>
    </div>
  </div>
);

  return(
  <div className={["container", "col-lg-10", "col-lg-offset-1", "col-sm-12", "card", "card-body"].join(" ")}>
  {recipeVals}

  </div>
)
}

export default Recipe
