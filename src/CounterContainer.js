import React, { Component } from 'react';

import './CounterContainer.css';
import { connect } from 'react-redux';

class CounterContainer extends Component {



  render() {
    return (
      <div className="CounterContainer">

      <div className="age">Age: <span>{this.props.age}</span></div>
      <button className="button1" onClick={this.props.onAgeUp}>Age UP</button>
      <button className="button2"onClick={this.props.onAgeDown}>Age Down</button>
      <button className="button1"onClick={this.props.onAgeUp10}>Age UP10</button>
      <button className="button2"onClick={this.props.onAgeDown10}>Age Down10</button>
      <button className="button3"onClick={this.props.onReset}>reset</button>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    age:state.age
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onAgeUp: () => dispatch({type:'AGE_UP'}),
    onAgeDown: () => dispatch({type:'AGE_DOWN'}),
    onAgeUp10: () => dispatch({type:'AGE_UP10'}),
    onAgeDown10: () => dispatch({type:'AGE_DOWN10'}),
    onReset: () => dispatch({type:'RESET'}),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
