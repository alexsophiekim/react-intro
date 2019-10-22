import React, { Component } from 'react';
import './test.css';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colour:'red'
    }
    // this.clicked = this.clicked.bind(this);
  }

  // clicked(){
  //     console.log('We clicked on a box');
  //     console.log(this.state.colour);
  // }
  clicked = () => {
    console.log('We clicked on a box');
    console.log(this.state.colour);

    if (this.state.colour == 'red') {
      this.setState({
        colour:'blue'
      });
    } else {
      this.setState({
        colour:'red'
      });
    }
  }

  render(){
    return(
      <div className={`link ${this.state.colour}`} onClick={this.clicked}>
        {this.state.colour}
        <a href={this.props.href}>{this.props.message}</a>
      </div>
    )
  }
}

export default Test;
