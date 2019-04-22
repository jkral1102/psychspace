import React from 'react';
// /import Style from './style/index.js';
//import Logo from '../../assets/icons/headerLogo.PNG'
import Styled from 'styled-components';
import API from '../../utils/API'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const BlogWrapper = Styled.div`
display: flex;
flex-direction: column;
flex: 2; 
color: black;
background-color: white;
border: solid 1px white;
padding: 30px;
margin: 10px;
`;


class BlogTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            articlebody: props.body,
            articletitle: props.title
        }
    }

    ArticleInput = event => {
        this.setState({
            articlebody: event.target.value
        })
    }
    TitleInput = event => {
        this.setState({
            articletitle: event.target.value
        })
    }

   updateArticle = (id) => {
       const { articletitle, articlebody } = this.state;
        API.updateArticle(id, { articletitle, articlebody})
            .then(res => {
                console.log(res.data);
  
                
            })
            .catch(err => console.log(err));
    };

    render() {
        const { id } = this.props;
        const { articletitle, articlebody } = this.state;

        return (
                    <BlogWrapper id={id}>
                        <input value={articletitle} onChange={this.TitleInput}/> 
                        <p>fuck this will be <br/> hard!
                        <a href="http://www.google.com">Yo</a>
                        <i> yooooo</i>
                        
                        </p>
                        <input value={articlebody} onChange={this.ArticleInput}/>
                        <button onClick={() => { this.updateArticle(id) }}>Update Article</button>
                        <FontAwesomeIcon icon={faTrash} onClick={() => { this.props.delete(id)}} />
                    </BlogWrapper>

        );
    }
}

export default BlogTile;
