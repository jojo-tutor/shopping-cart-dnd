import React from "react";
import "./styles.css";

export default class Todo extends React.Component {
  onClick = e => {
    const { checked, name, id: elementId } = e.target;
    const { id } = this.props
    if (elementId === 'delete') {
      this.props.onDelete({ id })
    } else {
      this.setState({ [name]: checked });
      this.props.onUpdate({ id, [name]: checked })
    }
  };

  render() {
    const { title, description, completed } = this.props;
    const checked = completed ? true : false;
    return (
      <div className="todo">
        <input
          name="completed"
          type="checkbox"
          checked={checked}
          onChange={this.onClick}
        />
        <span className={completed ? "done" : ""}>
          {title}: {description}
        </span>
        <button id='delete' onClick={this.onClick}>Delete</button>
      </div>
    );
  }
}