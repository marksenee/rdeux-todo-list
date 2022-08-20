import React from 'react';

import Todo from '../todo/Todo';

import FormStyle from './css/FormStyle.jsx';
import CheckStyle from './css/CheckStyle.jsx';
import TitleStyle from './css/TitleStyle.jsx';

import { useSelector } from "react-redux";


function List({ onRemoveTodo, onClickCheck }) {

  const { todos } = useSelector((state) => state.todos); // initialstate 안에 있는 todos를 가져온 것 

  return (
    <>
      <FormStyle> 
        <CheckStyle>
          <TitleStyle>해야할 일 🔥</TitleStyle>
          <>
              {todos.filter((todo) => !todo.isDone)
                  .map((progressTodo) => (
                      <Todo 
                      todo={progressTodo} 
                      key={progressTodo.id} 
                      onRemoveTodo={onRemoveTodo} 
                      onClickCheck={onClickCheck}
                  />
                  ))
              }
          </>
        </CheckStyle>
        <CheckStyle>
          <TitleStyle>완료한 일 👍🏻</TitleStyle>
          <>
              {todos.filter((todo) => todo.isDone)
                  .map((doneTodo) => (
                      <Todo 
                        todo={doneTodo} 
                        key={doneTodo.id} 
                        onRemoveTodo={onRemoveTodo} 
                        onClickCheck={onClickCheck}
                  />
                ))
              }
          </>
        </CheckStyle>
      </FormStyle>
    </>
  );
}

export default List;