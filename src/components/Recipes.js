import React, { Component } from 'react'
import Card from './Card';
import './Recipes.css';
import banana from '../images/banana.jpg';
import mango from '../images/mango.jpg';
import orange from '../images/orange.jpg';
import apple from '../images/apple.jpg';
import chicken from '../images/chicken.jpg';
import pizza from '../images/pizza.jpg';
import soup from '../images/soup.jpg';
import chicken2 from '../images/chicken-2.jpg';
import Recipe from './Recipe';
import loading from '../images/generating.gif';
import Main from './Main';

const APP_ID = "8dc09389";
const APP_KEY = "1674d16d7f2960217ac6957f8be3d6d8";

export default class Recipes extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            displayCategories : true,
            displayRecipes: false,
            recipes: ""
        }
    }

    onImageClick = (searchKey) => {
        console.log(searchKey)
        this.loadData(searchKey);
        console.log(this.state.recipes);
        this.setState({
            displayCategories : false,
            displayRecipes : true
        })  
    }

    loadData =  (searchKey) => {
        console.log(searchKey)
        console.log(`https://api.edamam.com/search?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`);

        fetch(`https://api.edamam.com/search?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                recipes : this.formatRecipe(data.hits),
                displayCategories : false,
                displayRecipes : true
            })
        }).then(data => console.log(this.state.recipes))
    }

    formatRecipe = (recipes) => {
        let tempRecipes = recipes.map(recipe => {
            let image = recipe.recipe.image;
            let name = recipe.recipe.source;
            let ingredients = recipe.recipe.ingredients.map(ingredient => ingredient.text).join(', ');
            let calories = recipe.recipe.calories.toFixed(2);
            let healthLabels = recipe.recipe.healthLabels;

            let tempRecipe = {image, name, ingredients, calories, healthLabels}
            return tempRecipe;
        });

        return tempRecipes;
    }

    render() {
        return (
            <>
            {this.props.auth.isAuthenticated() && this.state.displayCategories ?
            <div className="container">
            <div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <h1>Try our award wining Recipies</h1>
            </div>
            <div className="col-sm-2"></div>
        </div>
        <div className="row"> 
            <Card itemName={banana} searchItem="banana" onImageClick={this.onImageClick}/>
            <Card itemName={apple} searchItem="apple" onImageClick={this.onImageClick}/>
            <Card itemName={mango} searchItem="mango" onImageClick={this.onImageClick}/>
            <Card itemName={orange} searchItem="orange" onImageClick={this.onImageClick}/>
        </div>
        <div className="row">
            <Card itemName={chicken} searchItem="chicken" onImageClick={this.onImageClick}/>
            <Card itemName={pizza} searchItem="pizza" onImageClick={this.onImageClick}/>
            <Card itemName={soup} searchItem="soup" onImageClick={this.onImageClick}/>
            <Card itemName={chicken2} searchItem="chicken" onImageClick={this.onImageClick}/>
        </div> 
        </div> 
    </div>
    : null
    }

    {
        this.state.displayRecipes && this.state.recipes ?
             <div className="container">
            {this.state.recipes.map((recipe, id) => {
                return <Recipe key={id} recipe={recipe}/>
            })}
            <a className="backbutton" href="/recipes"><button type="button" className="btn btn-primary btn-lg">Back</button></a>
        </div>
        : (this.state.displayRecipes ? <img className="loading" src={loading} alt="loading.."/> : null)
    }
     {!this.props.auth.isAuthenticated() && 
        <Main message="You are not logged in. Please login to view" showbutton="true" auth={this.props.auth}/>}
    </>
        )
    }
}
