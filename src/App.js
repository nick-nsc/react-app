import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div>
          <nav className="Navigation-bar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />          
        </Switch>
      </div>
    );
  }
}

export default App;
