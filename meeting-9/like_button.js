"use strict";

const e = React.createElement;



class ToDo extends React.Component{
    
     
    myList = [
        {id: 1, title: "javascript", author: "Nika Kobaidze"},
        {id: 2, title: "PHP", author: "rasmus lerdorf"}
    ];
    
    constructor(props){
        super(props);
        this.state = {myList: this.myList}
    }
    
    render(){
        this.myList.forEach(element => {
            return e(<li>{element.title}</li>)
        });
    }
}



class LikeButton extends React.Component {
   
    
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return "You liked this.";
        }

        return e("button", { onClick: () => this.setState({ liked: true }) },"Like");

        // return <button onClick={() => this.setState({ liked: true })}>Like</button>;
    }
}

// ... the starter code you pasted ...

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(<LikeButton />, domContainer);