import React from 'react';

class ListItem extends React.Component {

  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteTodo(this.props.index);
  }

  render(){
    return(
      <li>{this.props.text} <button onClick={this.handleDelete}>X</button></li>
    )
  }
}

export default ListItem;
