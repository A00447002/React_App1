import './App.css';
import About from './Components/About'
import MyTown from './Components/MyTown'
import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'p'
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Hey there, Welcome to my website</h2>
        
        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'p' })}>About</p>
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>My Town</p>
        </div>

        {this.state.selectedMenu === 'p' ?
          <About />
          :
            <MyTown />
        }
      </div>
    );
  }
}


export default App;