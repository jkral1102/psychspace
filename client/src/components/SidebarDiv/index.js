import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
display: flex;
flex-direction: column;

margin: 0px 0px 20px 20px;
border: solid 1px;
`;

const TitleDiv = Styled.div` 
font-size: 30px;
`;

const BlogBody = Styled.div` 
font-size: 16px;
`;

class SidebarDiv extends React.Component {

    render() {

        return (
            <Wrapper>
                <TitleDiv>{this.props.title}</TitleDiv>
                <BlogBody>{this.props.body}</BlogBody>
            </Wrapper>
        );
    }
}

export default SidebarDiv;