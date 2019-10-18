//import React, { Component } from "react";
// import React from 'react';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import TodosList from './Components/todos-list.component';
import EditTodo from './Components/edit-todo.component';
import CreateTodo from './Components/create-todo-list.component';

import logo from './Images/new.jpg';



class App extends Component {
  render(){
  return (
    <Router>
    <div className="container">
     
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
         <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"></img>
       </a>
       <Link to="/" className="navbar-brand">MERN-STACK TO DO APP</Link>
       <div className="collapse navbar-collapse">
         <ul className="navbar-nav mr-auto">
           <li className="navbar=item">
             <Link to="/" className="nav-link">Todos</Link>
             </li>
             <li className="navbar=item">
             <Link to="/create" className="nav-link">Create Todo</Link>
             </li>
         </ul>

       </div>

     </nav>

    <Route path="/" exact component={TodosList}></Route>
    <Route path="/edit/:id"  component={EditTodo}></Route>
    <Route path="/create"  component={CreateTodo}></Route>
    </div>

    
    </Router>
    
    )
  }
}


export default App;
