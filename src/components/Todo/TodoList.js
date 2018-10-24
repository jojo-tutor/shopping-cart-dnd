import React from "react";
import "./styles.css";
import debounce from 'lodash/debounce'
import Todo from './Todo'
import { db } from '../../firebase'
// https://codesandbox.io/s/k3x3531535

export default class TodoList extends React.Component {
  state = {
    todos:[],
    isEditMode: false,
    filteredTodos: [],
    filter: '',
    requesting: false,
    fetching: true
  }

  fields = ['title', 'description']

  componentDidMount() {
    this.subscribe = db.getDocumentUpdates('todo', this.updateList)
    this.updateList()
  }

  updateList = async() => {
    let todos = await db.onceGetDocuments('todo')
    if (todos) {
      todos = Object.entries(todos).map(([id, value]) => {
        return {
          ...value,
          id
        }
      })
    } else {
      todos = []
    }
    this.setState({ todos: todos, requesting: false, fetching: false })
  }

  componentWillUnmount() {
    this.subscribe.off()
  }

  getFormFields = () => {
    return this.fields.reduce((accum, field) => {
      accum[field] = this.formRef[field].value
      return accum
    }, {})
  }

  onUpdate = (data) => {
    db.updateDocument('todo', data)
  }

  onCreate = () => {
    const formFields = this.getFormFields()
    const isValid = Object.values(formFields).reduce((res, value) => {
      return value && res
    }, true)
    if (isValid) {
      this.setState({
        isEditMode: false,
        requesting: true
      },() => {
        db.createDocument('todo', { ...formFields, completed: false })
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
    db.deleteDocument('todo', { id })
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
    const { todos, isEditMode, filteredTodos, filter, fetching  } = this.state
    const submitLabel = isEditMode ? 'Submit' : 'Add Todo'
    let list = filter ? filteredTodos : todos
    return (
      <>
      <input placeholder='Filter' name='filter' onChange={this.onFilterChange}/>
      {fetching ? 'Loading...' : list.map(e => (
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