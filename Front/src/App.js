import React, {Component} from 'react'
import './App.css'
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import HotelsVols from "./HotelsVols"
import withStyles from 'react-jss'
import style from './App.style'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.layout}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hotels&vols/">Vols & Hotels</Link>
              </li>
            </ul>
          </nav>
          <div className={classes.view}>
            <Route path="/" exact component={Home}/>
            <Route path="/hotels&vols/" component={HotelsVols}/>
          </div>
        </div>
      </BrowserRouter>

    )
  }
}

export default withStyles(style)(App)
