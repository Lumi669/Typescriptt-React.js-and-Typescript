import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button id={item.id} onClick={props.onDeleteTodo}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
