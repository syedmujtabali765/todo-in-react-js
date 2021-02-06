import './App.css';
import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: "",
      todos: []
    }
  }

  add = () => {

    if (this.state.value !== "") {
      let { todos, value } = this.state;

      let obj = {
        todo_value: value,
        edit: false
      }

      this.setState({
        todos: [...todos, obj],
        value: ""
      })
    }
  }

  dAll = () => {

    let { todos } = this.state;

    todos = [];

    this.setState({ todos: todos });
  }

  delli = (i) => {

    this.state.todos.splice(i, 1);

    this.setState({
      todos: this.state.todos
    })
  }

  editTODO = (i) => {

    let { todos } = this.state;

    todos[i].edit = true;

    this.setState({ todos: todos });

  }

  handleChange = (e, i) => {

    let { todos } = this.state;

    todos[i].todo_value = e.target.value;

    this.setState({ todos: todos });
  }

  update = (i) => {

    let { todos } = this.state;

    todos[i].edit = false;

    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="main">
        <h1 className="heading">TODO APPICATION</h1>
        <input placeholder="Enter Your Todo" className="input_field" type="text" onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }} value={this.state.value} />
        <button className="btn" onClick={() => this.add()}> <i class="fa fa-plus-circle" aria-hidden="true"> </i></button>
        <button className="btn" onClick={() => this.dAll()}> <i class="fa fa-trash" aria-hidden="true"></i> </button>
        <ul>
          {this.state.todos.map((t, i) => {
            return <li key={i}>{t.edit ? <input className="liIput" value={t.todo_value} type="text" onChange={(t) => { this.handleChange(t, i) }} /> : t.todo_value}

              {t.edit ? <button className="btn" onClick={() => this.update(i)}> <i class="fa fa-check-circle" aria-hidden="true"></i> </button> 
              : <button className="btn" onClick={() => this.editTODO(i)}> <i class="fa fa-pencil" aria-hidden="true"></i> </button>}

              <button className="btn" onClick={() => this.delli(i)}> <i class="fa fa-minus-circle" aria-hidden="true"></i> </button></li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
