import React from 'react';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, title: "JS"},
                {id: 2, title: "React"}
            ],
            inputValue: "test"
        };
    }
    
    
    deleteHandle = (id) => {
        console.log(id);
        
        const filterTodos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        
        this.setState({
            todos: filterTodos
        });
    }
    
    handleInputChange = (event) => {
        const value = event.target.value;
        
        this.setState({inputValue: value});
    }
    
    render(){
        return (
            <div>
                <h1>Todo</h1>
                <form>
                    <input type='text' value={this.state.inputValue} onChange={this.handleInputChange}/>
                </form>
                <ul>
                    {
                        this.state.todos.map((todo) => {
                            return <li key={todo.id}><div>{todo.title}</div><div><button onClick={() => this.deleteHandle(todo.id)}>Delete</button></div></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;