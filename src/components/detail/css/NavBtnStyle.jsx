import React from 'react';
import styled from 'styled-components';

const StyleNavBtnStyle= styled.button`
    width: 100px;
    height: 40px;
    background-color: white;
    border-color: #ddd;
    border-radius: 10px;
    border-style: solid;
    margin: 5px 20px 5px 0px;

`;

function NavBtnStyleStyle({ children, ...rest }) {
    return <StyleNavBtnStyle {...rest}>{children}</StyleNavBtnStyle>
}

export default NavBtnStyleStyle;