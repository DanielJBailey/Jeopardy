import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Jeopardy from './components/Game/Jeopardy';
import FetchData from "./components/Admin/FetchData";
import './App.scss';


const App = () => (
  <Switch>
    <Route exact path = "/" component={Jeopardy}/>
    <Route path = "/admin" component = {FetchData} />
  </Switch>
)

export default App;
