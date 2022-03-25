import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todolist: PropTypes.array, //cai nay la khai bao kieu du lieu cua bien todolist la mang
};

TodoList.defaultProps = {
  todolist: [], //day la khoi tao gia tri mac dinh ->neu khong truyen vao se la mang rong
};
function TodoList(props) {
  const { TodoList } = props;
  //co nhieu props thi ta de la props,nhung day chi co 1 prop la todolist nen ta khai bao vao luon,con ngoac {} la chi lay 1 key -value trong props Todolist thoi
  //con khong co {} no se log ra het cac cap key-value

  return (
    <ul className="todo-list">
      {TodoList.map((todo) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed", //cai nay no su dung npm classnames ..cau lenh kia la dieu kien true
          })}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
