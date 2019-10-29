import React, {Component} from 'react';
import './Form.css';
import Item from '../Item/Item';
import Button from '../Button/Button';

class Form extends Component{

  constructor(props){
    super(props);
    this.changeInput = this.changeInput.bind(this);
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('We are submmitting a submit form');
    this.props.submit();
  }

  changeInput(e){
    // console.log(e.target.value);
    this.props.changeInputValue(e.target.value);
  }

  render(){
    return(
      <form className="searchForm" onSubmit= {this.submitForm}>
        <input className="searchBar" value={this.props.Item.value} onChange={this.changeInput}></input>
        <Button btnText="Add New Item"/>
      </form>
    )
  }
}

export default Form;
