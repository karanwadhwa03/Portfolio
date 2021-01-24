import React from 'react'
import Home from './components/home'
import About from "./about/about";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App=()=>{
  return(
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
    <Route path='/' exact component={Home}></Route>
    <Route path='/about' exact component={About}></Route>

    </Switch>
    </div>
    </Router>
  )

}
export default App