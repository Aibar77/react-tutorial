import "./todo-list-item.css";
import React from "react";

class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      important,
      done,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
          onClick={onDeleted}
        >
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </span>
    );
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? "steelblue" : "black",
//     fontWeight: important ? "bold" : "normal",
//   };

//   return (
//     <span className="todo-list-item">
//       <span style={style} className="todo-list-item-label">
//         {label}
//       </span>
//       <button
//         type="button"
//         className="btn btn-outline-success btn-sm float-end"
//       >
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button" className="btn btn-outline-danger btn-sm float-end">
//         <i className="fa fa-trash" aria-hidden="true" />
//       </button>
//     </span>
//   );
// };

export default TodoListItem;
