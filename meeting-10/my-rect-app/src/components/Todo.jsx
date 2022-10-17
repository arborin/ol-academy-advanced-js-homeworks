import React from 'react';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, title: "JS"},
                {id: 2, title: "React"}
            ]
        };
    }
    
    
    deleteHandle = (id) => {
        console.log(id);
        
        const filterTodos = this.state.todos.filter((todo) => {
            return todo.id != id;
        });
        
        this.setState({
            todos: filterTodos
        });
    }
    
    render(){
        return (
            <div>
                <h1>Todo</h1>
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