import React from 'react';
import '../components/Main.css'

const Main = props => {
    return(
        <div className="Main">
            <h1>{props.message}</h1>
            {props.showbutton === "false" ? 
                <p>Contact us at : xxx-xxx-xxx </p>  : 
                <button type="button" className="btn btn-primary btn-lg" onClick={props.auth.login}>Sign In</button> }
        </div>
    )
}

export default Main;