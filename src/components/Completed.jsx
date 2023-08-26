import React from "react";
import { Todo } from "./Todo";
import { GlobalState } from "../context/AppContextProvider";

export const Completed = () => {
  const { todos, removeAllTodos, removeTodo } = GlobalState();
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const onDelete = (id) => {
    removeTodo(id);
  };
  let content;
  if (completedTodos.length === 0) {
    content = <p className="text-2xl text-center">No completed Todo.</p>;
  }
  if (completedTodos.length > 0) {
    content = (
      <button
        className=" bg-red-500 text-white px-2 py-2 space-x-2 rounded-md float-right text-xs"
        onClick={removeAllTodos}
      >
        <i className="fa-regular fa-trash-can"></i>
        <span>delete all</span>
      </button>
    );
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          {completedTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              endIcon={"fa-regular fa-trash-can"}
            />
          ))}
        </div>
        <div className="my-5">{content}</div>
      </form>
    </div>
  );
};
