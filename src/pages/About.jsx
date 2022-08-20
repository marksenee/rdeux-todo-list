import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Detail from "../components/detail/Detail";

function About() {
    const { todos } = useSelector((state) => state.todos); // initialstate 안에 있는 todos를 가져온 것 

    // 고유한 id 값 조회 
    const param = useParams();
    
    // param은 object이고 Id에 접근해야함 
    // id에 접근하면 Id는 string이기 때문에 number로 형변환시켜줘야 함 
    let id = Number(param.id)
    
    return (
        <>
            <div>{
                todos.filter(todo => todo.id === id)
                .map(detail => (
                    <Detail  
                        key={detail.id}
                        todos={detail}/>
                    ))
                }
            </div>
        </>
    );
}

export default About;