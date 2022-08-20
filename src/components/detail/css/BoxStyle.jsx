import React from 'react';
import styled from 'styled-components';

const StyleBox = styled.div`
    background-color: white;
    width: 600px;
    height: 450px;
    display:inline-block;    
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: #e0e0e0;
    border-radius: 10px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

function BoxStyle({ children, ...rest }) {
    return <StyleBox {...rest}>{children}</StyleBox>
}

export default BoxStyle;