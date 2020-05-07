import React, { Component, setState } from 'react';
import './play.css';
import { connect } from 'react-redux';
import Reset from './reset';

class Play extends Component{
  // state = { count: 0 }
  
  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.dispatch({ type: "INCREMENT" });
  }
  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dispatch({ type: "DECREMENT" });
  }
  render () {
    return (
      <div className="App">
        <div className='container'>
          <div className='name'>demo</div>
          <div className='feature'>
            <div className='border' onClick={this.decrement}> - </div>
            <div> { this.props.count } </div>
            <div className='border' onClick={this.increment}> + </div>
          </div>
          <Reset / >
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Play);
