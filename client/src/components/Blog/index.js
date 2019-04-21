import React from 'react';
import Style from './style/index.js';
//import Logo from '../../assets/icons/headerLogo.PNG'
import Styled from 'styled-components';
import SidebarDiv from '../SidebarDiv';
import Articles from './articles.js';
import Books from './books.js'

const Wrapper = Styled.div`
display: flex;
flex-direction: row;
flex: 2;
`;

const BlogWrapper = Styled.div`
display: flex;
flex-direction: column;
flex: 2; 
background-color: #262222;
border: solid 1px white;
padding: 30px;
margin: 10px;
`;

const TitleDiv = Styled.div` 
font-size: 30px;
text-transform: capitalize;
`;

const BlogBody = Styled.div` 
font-size: 16px;
`;


class Blog extends React.Component {
    state = {
        articles: Articles,
        books: Books
    }

    componentDidMount() {
        this.getUsers();
    }
    getUsers = _ => {
        fetch('http://localhost:3001')
            .then(response => console.log(response))//response.json())
            .then(({ response }) => this.setState({ users: 'response.users' }))
            .catch(error => console.log(error));
    }
    showUsers = user => <div key={user.id}>{user.username}</div>



    render() {
        const { users } = this.state;
        let bookDiv = this.state.books.map((item, index) => (
            <SidebarDiv 
                id={item.id}
                title={item.title}
                body={item.body}
            />
        ))

        let articleDiv = this.state.articles.map((item, index) => (
            <BlogWrapper id={item.id}>
                <div style={{'flex-direction': 'row'}}>
                <TitleDiv>{item.title}</TitleDiv>
                {item.date}
                </div>
                
                <BlogBody>{item.body}</BlogBody>
               
            </BlogWrapper>
        ))
        return (
            <Wrapper>
            <div style={{'display': 'flex', 'flex-direction': 'column'}}>{bookDiv}</div> 
            <div style={{'display': 'flex', 'flex-direction': 'column'}}>{articleDiv}</div>
      
            
</Wrapper>
        );
    }
}

export default Blog;
