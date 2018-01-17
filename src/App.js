import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'
import Recipe from './Recipe/Recipe';
import AddButton from './AddButton/Addbutton';
import UpdateForm from './UpdateForm/UpdateForm';
import Form from './Form/Form';


class App extends Component {

  state = {
    "recipes": {
      "Summer Pasta with Tomatoes and Peas": ["pasta", "peas", "cherry tomatoes","olive oil", "salt","pepper"],
      "Pan-Seared Soy Sauce and Black Pepper Tofu": ["firm tofu", "soy sauce", "ground black pepper", "olive oil", "sesame seeds", "green onions"],
      "Potato Soup":["green onions", "vegetable broth", "cubed potato", "Cajun seasoning", "shredded sharp cheddar"]
    },
    "newInputName": "",
    "newInputIngredients": "",
    "changedIngredients": "",
    "updateFormVisible": "isnotvisible",
    "addFormVis": "isnotvisible"
  }


  submit = (event) => {
    event.preventDefault();
    let key = this.state.newInputName;
    let value = this.state.newInputIngredients;
    let stateObj = this.state.recipes;
    stateObj[key] = value;
    this.setState({recipes: stateObj})
  }



  handleNameInput = (event) => {
    this.setState({newInputName: event.target.value})
  }

  handleIngInput = (event) => {
    this.setState({newInputIngredients: event.target.value})
  }

  handleNameClick = (event) => {
    let key = event.target.id;
    let newState = this.state["selected"] = key;
    this.setState({newState})
    console.log(key)
  }

  handleUpdateClick = (event) => {
    let e = event.target.id;
    this.setState({selected: e})
    this.setState({"updateFormVisible": "isvisible"})
  }

  handleUpdateSubmitClick = (event) => {
  event.preventDefault();
  let key = this.state.selected;
  let value = this.state.changedIngredients;
  let splitVal = value.split(",");
  let r = this.state.recipes;
  r[key] = splitVal;
  this.setState({recipes: r})
  this.setState({updateFormVisible: "isnotvisible"})
}

  handleUpdateChange = (event) => {
    let e = event.target.value;
    this.setState({"changedIngredients": e})
  }

handleDeleteClick = (event) => {
  let e = event.target.id;
  let r = this.state.recipes;
  delete r[e]
  this.setState({selected: e})
  this.setState({recipes: r})
  console.log(this.state.recipes)
}

handleAddClick = (event) => {
  this.setState({"addFormVis": "isvisible"})
}

handleAddSubmitClick = (event) => {
  event.preventDefault();
  let key = this.state.newInputName;
  let value = this.state.newInputIngredients;
  if(value === "" || key === ""){return}
  let splitVal = value.split(",");
  let r = this.state.recipes;
  r[key] = splitVal;
  this.setState({recipes: r})
  this.setState({addFormVis: "isnotvisible"})
}



handleOutsideClick = (event) => {
  let e = event.target.id;
  if(e === "container"){
    this.setState({updateFormVisible: "isnotvisible"})
    this.setState({addFormVis: "isnotvisible"})
  }
}


  render() {

    return (
      <div className="App">
        <Recipe
        recipes={this.state.recipes}
        handleNameClick={this.handleNameClick}
        show={this.state.show}
        updateClick={this.handleUpdateClick}
        deleteClick={this.handleDeleteClick}/>

        <AddButton click={this.handleAddClick}/>

        <Form
        submit={this.handleAddSubmitClick}
        changeIng={this.handleIngInput}
        changeName={this.handleNameInput}
        vis={this.state.addFormVis}
        click={this.handleOutsideClick}/>

        <UpdateForm
        vis={this.state.updateFormVisible}
        change={this.handleUpdateChange}
        submit={this.handleUpdateSubmitClick}
        click={this.handleOutsideClick}/>


      </div>
    );
  }
}

export default App;
