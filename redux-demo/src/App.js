import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Play from './play';
import { createStore } from 'redux';
import { Provider } from'react-redux';

const initState = {
  count: 0
}

function reducer(state = initState, action) {
  console.log('reducer', state, action);
  const { type } = action;
  switch(type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'RESET'});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Play />
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </Provider>
    );
  }
}
export default App;
