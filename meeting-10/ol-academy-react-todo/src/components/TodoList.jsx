import React from 'react';
import Alert from './Alert';



class TodoList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {name: "Javascript", status: 'active'},
                {name: "React", status: 'done'}
            ],
            inputValue: "",
            nameExists: false,
        };
    }
    
    
    todoInputHandle = (e) => {
        this.setState({inputValue: e.target.value});
    }
    
    saveTask = () => {
        this.setNotification(false);
        
        const inputVal = this.state.inputValue.trim();
        let checkName = false;
        
        //check if name exists
        this.state.todos.map((todo)=>{
            if(todo.name === inputVal){
                checkName = true;
                this.setNotification(true);
            }
        })
        
        
        if(checkName === false && inputVal !== ''){
            this.state.todos.push({ name : inputVal, status: 'active'});
            this.setState({todos: this.state.todos });
        }
        
        
        
        this.setState({inputValue: ''}); // claer input value
        
    }
    
    deleteAll = () => {
        this.setNotification(false);
        this.setState({todos: []});
    }
    
    deleteDone = () => {
        this.setNotification(false);
        this.setState({todos: this.state.todos.filter((todo)=>{ return todo.status === "active"})})
    }
    
    deleteTask = () => {
        
    }
    
    setNotification = (status) => {
        this.setState({nameExists: status});
    }
    
    doneTask = (index) => {
        this.setNotification(false);
        
        let todos = this.state.todos;
        todos[index]['status'] = 'done';
        
        this.setState({todos: todos});
    }
    
    deleteTask = (index) => {
        this.setNotification(false);
        
        let todos =  this.state.todos;
        todos.splice(index, 1); 
        this.setState({todos: todos});
    }
    
    
    
    render(){
        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="vh-100" style={{backgroundColor: '#eee'}}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-lg-9 col-xl-7">
                                    <div className="card rounded-3">
                                        <div className="card-body p-4">

                                            <h4 className="text-center my-3 pb-3">To Do App</h4>

                                            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                                <div className="col-12">
                                                    <div className="form-outline">
                                                        <input type="text" onChange={ this.todoInputHandle } value={this.state.inputValue} id="form1" className="form-control" />
                                                        
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button type="button" onClick={ this.saveTask } className="btn btn-primary">Save</button>
                                                </div>

                                                <div className="col-12">
                                                    <button type="button" onClick={this.deleteAll}className="btn btn-warning">Delete All</button>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <button type="button" onClick={this.deleteDone}className="btn btn-success">Delete Done</button>
                                                </div>
                                            </form>
                                            
                                            { (this.state.nameExists) && <Alert/>}

                                            <table className="table mb-4">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No.</th>
                                                        <th scope="col">Todo item</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {   
                                                        this.state.todos.map((todo, index) => {

                                                            return (
                                                                    <tr key={index} className={ (todo.status === 'done') ? 'table-success' : ''}>
                                                                        <td>{index}</td>
                                                                        <td>{todo.name}</td>
                                                                        <td>{todo.status}</td>
                                                                        <td>
                                                                            <button type="submit" className="btn btn-danger btn-sm" onClick={()=>{this.deleteTask(index)}}>Delete</button>
                                                                            
                                                                            { (todo.status === 'active') ? <button type="button" onClick={()=>{this.doneTask(index)}}className="btn btn-success ms-1 btn-sm">Done</button> : ''}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        })
                                                    }
                                                    
                                                    
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default TodoList;