import { createStore } from "redux";
import { combineReducers } from "redux";
import todos_list from "../modules/todos";

const rootReducer = combineReducers({
  todos_list, // 모듈을 스토어와 연결
});
const store = createStore(rootReducer);

export default store;
