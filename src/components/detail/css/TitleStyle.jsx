import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h1`
    margin: 30px 0px 15px 20px;
`;

function TitleStyle({ children, ...rest }) {
    return <StyleTitle {...rest}>{children}</StyleTitle>
}

export default TitleStyle;