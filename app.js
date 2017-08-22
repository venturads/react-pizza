import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items:[], text: ''};
    }
    render(){
        return(
            <div>
                <h1>React Pizza order</h1>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button></button>
                </form>
            </div>
            )
    }
    
}

ReactDOM.render(<App />, document.getElementById('app'));