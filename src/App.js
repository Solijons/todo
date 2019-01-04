import React from 'react';
import List from './List.js';
import Header from './Header.js';
import Form from './Form.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      title: 'Todo List',
      author: 'Solijon Sharipov',
      todos: ['Focus', 'Invest', 'Learn'],
      textBox: ''
    }

    this.onTextboxChange = this.onTextboxChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  onTextboxChange(e){
    var newText = e.target.value;
    this.setState({
      textBox: newText
    })
  }

  submitTodo(e){
    e.preventDefault();
    var copyOfTodos = this.state.todos;
    copyOfTodos.push(this.state.textBox);
    this.setState({
      todos: copyOfTodos,
      textBox: ''
    })
  }

  deleteTodo(index){
    var copyOfTodos = this.state.todos;
    copyOfTodos.splice(index, 1);
    this.setState({
      todos: copyOfTodos
    })
  }

  render(){
    return(
      <div>
        <Header title={this.state.title}
                author={this.state.author} />

        <Form textboxChange={this.onTextboxChange}
              submitTodo={this.submitTodo}
              textBox={this.textBox}/>

        <List listItems={this.state.todos}
              deleteTodo={this.deleteTodo} />

      </div>
    )
  }
}

export default App;
