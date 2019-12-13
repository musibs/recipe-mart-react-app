import React from 'react'

export default function Recipe(props) {
    return (
        <div key={props.id} className="row">
                        <div className="col-md-3">
                            <img src={props.recipe.image} alt={props.recipe.name}/>
                        </div>
                        <div className="col-md-9">
                            <h3>Recipe Name: {props.recipe.name}</h3>
                            <p>Ingredients: {props.recipe.ingredients}</p>
                            <p>Calories: {props.recipe.calories}</p>
                            <p>Health Labels: {props.recipe.healthLabels}</p>
                        </div>
                    </div>
    )
}
