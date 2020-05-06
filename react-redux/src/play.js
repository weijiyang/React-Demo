import React, { Component, setState } from 'react';
import './play.css';

class Play extends Component{
  state = { count: 0 }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }
  render () {
    return (
      <div className="App">
        <div className='container'>
          <div className='name'>demo</div>
          <div className='feature'>
            <div className='border' onClick={this.decrement}> - </div>
            <div> { this.state.count } </div>
            <div className='border' onClick={this.increment}> + </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
