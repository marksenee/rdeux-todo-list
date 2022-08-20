import React from 'react';
import styled from 'styled-components';

const StyleDetailHeader = styled.div`
    background-color: white;
    width: 600px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 15px 0px 0px 0px;
    /* align-items: center; */
`;

function DetailHeaderStyle({ children, ...rest }) {
    return <StyleDetailHeader {...rest}>{children}</StyleDetailHeader>
}

export default DetailHeaderStyle;