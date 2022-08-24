import React from "react";
import { useSelector } from "react-redux";

import Todo from "../todo/Todo";

import FormStyle from "./css/FormStyle.jsx";
import CheckStyle from "./css/CheckStyle.jsx";
import TitleStyle from "./css/TitleStyle.jsx";

function List({ onRemoveTodo, onClickCheck }) {
  const { todos } = useSelector((state) => state.todos_list); // todos_list라는 이름을 가진 리듀서에 접근해서 todos객체를 가져오는 것
  return (
    <>
      <FormStyle>
        <CheckStyle>
          <TitleStyle>해야할 일 🔥</TitleStyle>
          <>
            {todos
              .filter((todo) => !todo.isDone)
              .map((progressTodo) => (
                <Todo
                  todo={progressTodo}
                  key={progressTodo.id}
                  onRemoveTodo={onRemoveTodo}
                  onClickCheck={onClickCheck}
                />
              ))}
          </>
        </CheckStyle>
        <CheckStyle>
          <TitleStyle>완료한 일 👍🏻</TitleStyle>
          <>
            {todos
              .filter((todo) => todo.isDone)
              .map((doneTodo) => (
                <Todo
                  todo={doneTodo}
                  key={doneTodo.id}
                  onRemoveTodo={onRemoveTodo}
                  onClickCheck={onClickCheck}
                />
              ))}
          </>
        </CheckStyle>
      </FormStyle>
    </>
  );
}

export default List;
