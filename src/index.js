import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (<div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img src="" alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    shakil
                </a>
                <div className="metadata">
                    <span className="date">
                        today at 9:00 am
                    </span>
                </div>
                <div className="text">
                    My first blog...
                </div>
            </div>
        </div>
    </div>);
};


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
