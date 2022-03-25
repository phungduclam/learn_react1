import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todolist = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },

    {
      id: 2,
      title: "sleep",
      status: "completed",
    },

    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList TodoList={todolist} />
    </div>
    //todolist={todolist} todolist khong ngoac la props,con {todolist} la bien const ma ta muon goi
    //thang todolist se duoc thang todofeature nho render du lieu
  );
}

export default TodoFeature;
