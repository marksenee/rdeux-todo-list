// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHECK_TODO = "CHECK_TODO";

let nextId = 5;

// Action Creator
export const addTodo = (title, content) => {
  // 받아오는 인자에  { title, content } 이런식으로 받아오면 undefined라고 뜸
  return {
    type: ADD_TODO,
    todo: {
      id: nextId++,
      title: title,
      content: content,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const checkTodo = (id) => {
  return {
    type: CHECK_TODO,
    id,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트",
      content: "리액트 hooks 공부하기",
      isDone: false,
    },
    {
      id: 2,
      title: "TIL",
      content: "매일 TIL 작성하기",
      isDone: true,
    },
    {
      id: 3,
      title: "WIL",
      content: "일요일 WIL 제출하기",
      isDone: false,
    },
    {
      id: 4,
      title: "JavaScript",
      content: "JavaScript 공부하기",
      isDone: false,
    },
  ],
};

// Reducer

// 등록
// 완료, 취소 상태

const todos_list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // 상태값은 불변 객체로 관리해야 하므로 수정할 때마다 전개연산자를 활용해 새로운 객체를 생성한다.
        todos: state.todos.concat(action.todo),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(
          (item) =>
            item.id === action.id ? { ...item, isDone: !item.isDone } : item // for문처럼 돌린 item의 값들을 받아온 것
        ),
      };
    default:
      return state;
  }
};

// export default reducer
export default todos_list;
