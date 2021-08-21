//Create Class Components
import React, { Component } from 'react'
import axios from 'axios';
import { render } from 'react-dom';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }
    retrievePosts() {
        axios.get("http://localhost:8000/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts);
            }
        });
    }

    render() {

        return (
        
        <div>
        
        {this.state.posts.map(posts=>(
        
        
        
        <div>
        
        <p>
        
        {posts.topic}
        
        </p>
        
        <p>
        
        {posts.description}
        
        </p>
        
        <p>
        
        {posts.postsCategory}
        
        </p>
        
        
        
        
        
        </div>
        
        
        
        ))}
        
        
        
        
        </div>
        
        )
        
        }
        
    }        