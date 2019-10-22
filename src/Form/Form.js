import React, {Component} from 'react';
import './Form.css';
import Item from '../Item/Item';
import Button from '../Button/Button';


class Form extends Component{

  render(){
    return(
      <form className="searchForm">
        <input className="searchBar"></input>
        <Button btnText="Add New Item"/>
        <Button btnText="Edit Item" btnType="redBtn"/>
      </form>
    )
  }

}

export default Form;
