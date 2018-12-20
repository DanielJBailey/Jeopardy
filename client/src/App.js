import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Jeopardy from './components/Game/Jeopardy';
import Admin from './components/Admin/Admin';
import AdminCategories from './components/Admin/AdminCategories';
import './App.scss';


const App = () => (
  <Switch>
    <Route exact path = "/" component={Jeopardy}/>
    <Route exact path = "/admin" component={Admin} />
    <Route exact path = "/admin/category/:id" component={AdminCategories} />
  </Switch>
)

export default App;
