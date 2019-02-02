import React, {Component} from 'react'
import './App.css'
import Keycloak from 'keycloak-js'
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import HotelsVols from "./HotelsVols"
import withStyles from "react-jss"
import style from "./App.style"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keycloak: null,
      authenticated: false
    }
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json')
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  render() {
    const { classes } = this.props

    return this.state.keycloak
      ? this.state.authenticated
        ? <BrowserRouter>
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
        : <div>Unable to authenticate!</div>
      : <div>Initializing Keycloak...</div>
  }
}

export default withStyles(style)(App)
