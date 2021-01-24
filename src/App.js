import React, { Component } from 'react';
import TodoCard from './todoCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleClick = () => {
    this.state.isClicked ? this.setState({isClicked : false}) :
      this.setState({isClicked : true})
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  deleteItem = (index) => {
    console.log("was clicked", index)
    let copyOfList = this.state.listOfTodos;
    copyOfList.splice(index, 1);
    this.setState({listOfTodos: [...copyOfList]})
  }

  render() {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
          <ol>{this.state.listOfTodos.map((todo, index) => {
            return <TodoCard key={todo+index} index={index} title={todo} clickToRemove={this.deleteItem} />
          })}</ol>
          <button onClick={this.handleClick}>Click Me!</button>
          <p>
            {this.state.isClicked ? "true" : "false"}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
