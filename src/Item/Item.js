import React, {Component} from 'react';
import './Item.css';
import Button from '../Button/Button';

class Item extends Component{
  render(){
    return(
      <div className="listItem">
        <div className="itemText">
          {this.props.ItemInfo.text}
        </div>
        <div className="itemButtons">
          <Button btnText="Edit" btnType="blueBtn" />
          <Button btnText="Delete" btnType="redBtn" />
        </div>
      </div>
    )
  }
}

export default Item;
