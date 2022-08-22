import React from "react";
import { useNavigate } from "react-router-dom";

import IndexStyle from "./css/IndexStyle";
import ItemListStyle from "./css/ItemListStyle";
import ItemStyle from "./css/ItemStyle";
import CheckBtnStyle from "./css/CheckBtnStyle";

function Todo({ todo, onRemoveTodo, onClickCheck }) {
  const { id, title, content, isDone } = todo;

  //navigate 생성
  const navigte = useNavigate();

  // navigation 함수 설정
  const toDetail = (id) => {
    // navigation 시키기
    navigte(`/about/${id}`);
  };

  return (
    <IndexStyle>
      <ItemListStyle>
        <ItemStyle>
          ☑ {title} : {content}
        </ItemStyle>
      </ItemListStyle>
      <div>
        <CheckBtnStyle color="#f89e4a" onClick={() => toDetail(id)}>
          상세
        </CheckBtnStyle>
        <CheckBtnStyle color="#ff80ab" onClick={() => onRemoveTodo(id)}>
          삭제
        </CheckBtnStyle>
        {isDone ? (
          <CheckBtnStyle color="#8c9eff" onClick={() => onClickCheck(id)}>
            취소
          </CheckBtnStyle>
        ) : (
          <CheckBtnStyle color="#b388ff" onClick={() => onClickCheck(id)}>
            완료
          </CheckBtnStyle>
        )}
      </div>
    </IndexStyle>
  );
}

export default Todo;
