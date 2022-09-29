import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1>Blog post</h1>
            <div className='all-blog'>
                <div className='blog-info'>
                    <div className='blog-cart'>
                        <h3>How does react works</h3>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                    <div className='blog-cart'>
                        <h3>Props vs state in react</h3>
                        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                    </div>
                    <div className='blog-cart'>
                        <h3>Why we use useEffect in addition to API load</h3>
                        <p>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;