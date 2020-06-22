import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (<div className="ui container comments">

        <ApprovalCard>
            <CommentDetail image={faker.image.avatar()} author={faker.name.findName()} timestamp='today at 9:00'
                           content={faker.lorem.sentence(20)}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail image={faker.image.avatar()} author={faker.name.findName()} timestamp='today at 9:00'
                           content={faker.lorem.sentence(20)}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail image={faker.image.avatar()} author={faker.name.findName()} timestamp='today at 9:00'
                           content={faker.lorem.sentence(20)}/>
        </ApprovalCard>


        {/*<CommentDetail image={faker.image.avatar()} author={faker.name.findName()} timestamp='today at 8:00' content={faker.lorem.sentence(20)} />*/}
        {/*<CommentDetail image={faker.image.avatar()} author={faker.name.findName()} timestamp='today at 1:00' content={faker.lorem.sentence(20)} />*/}


    </div>);
};


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
