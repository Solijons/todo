import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.submitTodo}>
        <input type="text" value={this.props.textBox} onChange={this.props.textboxChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
