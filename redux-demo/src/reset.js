import React, { Component } from 'react';
import './reset.css';
import { connect } from 'react-redux';

class Reset extends Component {
    reset = () => {
        this.props.dispatch({type: 'RESET'});
    }
    render () {
        return(<div className='reset'>
            <div className='reset-btn' onClick={this.reset}>点我重置</div>
        </div>)
    }
}

function mapStateToState(state){
    return {
        count: state.count
    }
}
export default connect(mapStateToState)(Reset)