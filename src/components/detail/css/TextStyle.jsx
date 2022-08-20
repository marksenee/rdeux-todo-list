import React from 'react';
import styled from 'styled-components';

const StyleText = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0px 0px 20px;
    /* align-items: center; */
`;

function TextStyle({ children, ...rest }) {
    return <StyleText {...rest}>{children}</StyleText>
}

export default TextStyle;