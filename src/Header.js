import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>
      </div>
    )
  }
}

export default Header;
