import React from "react";
import { useNavigate } from "react-router-dom";

import BoxStyle from "./css/BoxStyle";
import DetailLayoutStyle from "./css/DetailLayoutStyle";
import DetailHeaderStyle from "./css/DetailHeaderStyle";
import TextStyle from "./css/TextStyle";
import NavBtnStyleStyle from "./css/NavBtnStyle";
import TitleStyle from "./css/TitleStyle";

function Detail({ todos }) {
  const { id, title, content } = todos;

  //navigate 생성
  const navigte = useNavigate();

  return (
    <DetailLayoutStyle>
      <BoxStyle>
        <DetailHeaderStyle>
          <TextStyle>ID : {id}</TextStyle>
          <NavBtnStyleStyle onClick={() => navigte(`/`)}>
            이전으로
          </NavBtnStyleStyle>
        </DetailHeaderStyle>
        <>
          <TitleStyle>{title}</TitleStyle>
          <TextStyle>{content}</TextStyle>
        </>
      </BoxStyle>
    </DetailLayoutStyle>
  );
}

export default Detail;
