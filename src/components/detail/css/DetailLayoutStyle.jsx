import React from 'react';
import styled from 'styled-components';

const StyleDetailLayout = styled.body`
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

function DetailLayoutStyle({ children, ...rest }) {
    return <StyleDetailLayout {...rest}>{children}</StyleDetailLayout>
}

export default DetailLayoutStyle;