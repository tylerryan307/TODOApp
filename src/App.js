import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
  }

  removeItem = () => {
    const { items, onRemove } = this.props
    onRemove(items);
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }
  formSubmit = event => {
    event.preventDefault()
    console.log("This Is State", this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}/>
            <button>Submit</button>
          </form>
          <ol>
            {this.state.items.map((item, index)=>{
              return <li key={index}onRemove={this.item}>{this.state.items[index]}<button onClick={this.remove}>Remove</button></li>
            })}
          </ol>
        </header>
      </div>
    )
  }

}


export default App;
