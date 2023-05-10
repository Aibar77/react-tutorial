import "./todo-list-item.css";
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item">
      <span style={style} className="todo-list-item-label">
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-end">
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </span>
  );
};

export default TodoListItem;
