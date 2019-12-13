import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Callback from './components/Callback';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from './Auth';

const auth = new Auth()

function App() {
  return (
    <div className="App">
      <Header auth={auth}/>
      <Router>
    <Switch>
      <Route exact path="/">
          <Main message="Welcome to RecipeMart.com" showbutton="true" auth={auth}/>
      </Route>
      <Route exact path="/about">
          <Main message="Thank you for visiting us" showbutton="false"/>
      </Route>
      <Route exact path="/callback">
          <Callback />
      </Route>
      <Route exact path="/notfound">
          <Main message="404 Page Not Found" showbutton="false"/>
      </Route>
      <Route exact path="/recipes">
          <Recipes message="Welcome to recipes" showbutton="false" auth={auth}/>
      </Route>
      <Route exact path="/loginFailed">
          <Main message="Login Failed. Try Again" showbutton="true" auth={auth}/>
      </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;
