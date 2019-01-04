import React from 'react';
import ListItem from './ListItem.js';

class List extends React.Component {
  render(){
    var that = this;
    var listItems = this.props.listItems.map( function(item, index){
      return <ListItem text={item} key={index} index={index} deleteTodo={that.props.deleteTodo}/>;
    });

    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}

export default List;
