import React from "react";

import { useNavigate } from "react-router-dom";


function Detail({ todos }) {
    const { id, title, content } = todos;

    //navigate 생성
    const navigte = useNavigate(); 

    return (
        <>
            <div>{id}</div>
            <div>{title}={content}</div>
            <button onClick={() => navigte(`/`)}>이전으로</button>
        </>
    );
}

export default Detail;