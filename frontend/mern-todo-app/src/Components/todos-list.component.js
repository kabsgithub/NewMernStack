// import React, { Component } from './node_modules/react';
import React, { Component } from 'react';

export default class TodosList extends Component {

    constructor(props){
        super(props);

        this.state = {
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
         }

    }

    render(){
        return(
        <div>
            <p>Welcome to Todo list page</p>
        </div>
        )
        
    }
}