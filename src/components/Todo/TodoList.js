import React from "react";
import "./styles.css";
import uuid from 'uuid/v4'
import debounce from 'lodash/debounce'
import Todo from './Todo'
// https://codesandbox.io/s/k3x3531535

export default class TodoList extends React.Component {
  state = {
    todos:[{
      id: 1,
      title: 'Test',
      description: 'aa',
      completed: false
    },
      {
        id: 2,
        title: '22',
        description: 'aaxx',
        completed: false
      }],
    isEditMode: false,
    filteredTodos: [],
    filter: ''
  }

  fields = ['title', 'description']

  getFormFields = () => {
    return this.fields.reduce((accum, field) => {
      accum[field] = this.formRef[field].value
      return accum
    }, {})
  }

  onUpdate = (data) => {
    let todos = this.state.todos.map(e => {
      if(e.id === data.id)
        return {...e, ...data}
      return e
    })
    this.setState({ todos })
  }

  onCreate = () => {
    const formFields = this.getFormFields()
    const isValid = Object.values(formFields).reduce((res, value) => {
      return value && res
    }, true)
    if (isValid) {
      this.setState({
        todos: [
          ...this.state.todos,
          { ...formFields, id: uuid() }
        ],
        isEditMode: false
      })
    }
  }
  onClick = (e) => {
    const { target: { id } } = e
    const { isEditMode } = this.state
    if (isEditMode && id === 'submit') {
      this.onCreate()
    } else if (id === 'submit') {
      this.setState({ isEditMode: true })
    } else if (id === 'cancel') {
      this.setState({ isEditMode: false })
    }
  }

  onDelete = ({ id }) => {
    this.setState({
      todos: this.state.todos.filter(e => e.id !== id),
      filteredTodos: this.state.filteredTodos.filter(e => e.id !== id)
    })
  }

  onFilter = debounce((event) => {
    const filter = event.target.value
    if (filter) {
      const regex = new RegExp(`${filter}`, 'i')
      this.setState({
        filteredTodos: this.state.todos.filter(({ title, description }) => title.match(regex) || description.match(regex)),
        filter
      })
    }
    else {
      this.setState({ filteredTodos: [], filter })
    }
  }, 1000)

  onFilterChange = (e) => {
    e.persist()
    this.onFilter(e)
  }

  render() {
    const { todos, isEditMode, filteredTodos, filter } = this.state
    const submitLabel = isEditMode ? 'Submit' : 'Add Todo'
    let list = filter ? filteredTodos : todos
    return (
      <>
      <input placeholder='Filter' name='filter' onChange={this.onFilterChange}/>
      {list.map(e => (
        <Todo key={e.id} {...e} onUpdate={this.onUpdate} onDelete={this.onDelete}/>
      ))}
      {isEditMode && (
        <>
          <form ref={ref => this.formRef = ref}>
            <input name='title' placeholder='Title' />
            <input name='description' placeholder='Description' />
          </form>
          <button id='cancel' onClick={this.onClick}>Cancel</button>
        </>
      )}
      <button id='submit' onClick={this.onClick}>{submitLabel}</button>
      </>
    )
    ;
  }
}