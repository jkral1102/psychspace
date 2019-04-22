import React from 'react';
// /import Style from './style/index.js';
//import Logo from '../../assets/icons/headerLogo.PNG'
import Styled from 'styled-components';
// import SidebarDiv from '../SidebarDiv';
import API from '../../utils/API';
import BlogTile from '../BlogTile';
import MyEditor from '../MyEditor';



const Wrapper = Styled.div`
display: flex;
flex-direction: column;

`;


class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            // users: '',

            articlebody: '',
            articletitle: '',
            savedArticles: []
        }
        this.getArticles();
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

    saveArticle = () => {
        const newArticle = {
            articlebody: this.state.articlebody,
            articletitle: this.state.articletitle
        }

        API.saveArticle(newArticle)
            .then(res => {
                //console.log(res.data);
                this.setState({
                    savedArticles: [...this.state.savedArticles, res.data]
                });
                console.log(this.state.savedArticles)
            })
            .catch(err => console.log(err));
    };



    // GET: all saved articles
    getArticles = () => {
        //console.log(article);
        API.getArticles()
            .then(res => {
                this.setState({
                    savedArticles: res.data
                })
            })
            .catch(err => console.log(err));
    };


    deleteArticle = (id) => {
        // slice article with the id from state 
        this.setState((prevState) => ({
            savedArticles: prevState.savedArticles.filter((item) => item._id !== id)
        }));
       API.deleteArticle(id)
           .catch(err => console.log(err));
    };

    render() {
        // const bookDiv = this.state.books ? this.state.books.map((item, index) => (
        //     <SidebarDiv
        //         id={item.id}
        //         title={item.title}
        //         body={item.body}
        //     />
        // )) : null;
        const { savedArticles } = this.state;


        return (
            <Wrapper>
                <MyEditor />
                <input id='titleInput' onChange={this.TitleInput} placeholder='Enter title' />
                <input id='articleInput' onChange={this.ArticleInput} placeholder='Enter article body' />

                <button onClick={() => { this.saveArticle() }}>Save Article</button>
                {/* <div style={{'display': 'flex', 'flexDirection': 'column'}}>{bookDiv}</div>  */}

                {/* SHOW ARTICLES  */}
            
                {savedArticles && savedArticles.map((item, index) => (
                        <BlogTile key={item._id} id={item._id} title={item.articletitle} body={item.articlebody} delete={this.deleteArticle}/>
                ))
                }



            </Wrapper>
        );
    }
}

export default Blog;
