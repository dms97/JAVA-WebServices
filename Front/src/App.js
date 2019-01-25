import React, {Component} from 'react'
import './App.css'
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import HotelsVols from "./HotelsVols"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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

          <Route path="/" exact component={Home}/>
          <Route path="/hotels&vols/" component={HotelsVols}/>
        </div>
      </BrowserRouter>

    )
  }
}

export default App
