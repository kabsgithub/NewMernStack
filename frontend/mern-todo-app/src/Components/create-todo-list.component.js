// import React, { Component } from './node_modules/react';
import React, { Component } from 'react';

export default class CreateTodo extends Component {

    constructor(props){
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_complteted:false
                }
    }
    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    } asdfghj
    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_complteted}`);

        this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_complteted:false

        })
    }

    render(){
        return(
        <div style={{marginTop:20}}>
            <h3>Create New Todo</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <lable>Description:</lable>
                    <input type="text"
                    className="form-control"
                    value={this.state.todo_description}
                    onChange={this.onChangeTodoDescription}
                    ></input>
                </div>
                <div className="form-group">
                    <lable>Responsible:</lable>
                    <input type="text"
                    className="form-control"
                    value={this.state.todo_responsible}
                    onChange={this.onChangeTodoResponsible}
                    ></input>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                        type="radio"
                        name="priorityOption"
                        id="priorityLow"
                        value="Low"
                        checked={this.state.todo_priority==='Low'}
                        onChange={this.onChangeTodoPriority}></input>
                        <lable className="form-check-lable">Low</lable>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                        type="radio"
                        name="priorityOption"
                        id="priorityMedium"
                        value="Medium"
                        checked={this.state.todo_priority==='Medium'}
                        onChange={this.onChangeTodoPriority}></input>
                        <lable className="form-check-lable">Medium</lable>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                        type="radio"
                        name="priorityOption"
                        id="priorityHigh"
                        value="High"
                        checked={this.state.todo_priority==='High'}
                        onChange={this.onChangeTodoPriority}></input>
                        <lable className="form-check-lable">High</lable>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary"></input>

                </div>
            </form>
            
        </div>
        )
        
    }
}