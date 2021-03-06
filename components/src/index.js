import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:00PM" 
                    image={faker.image.avatar()} 
                    text="hi 1"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="alex" 
                    timeAgo="Today at 5:00PM" 
                    image={faker.image.avatar()} 
                    text="hi 2" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane"  
                    timeAgo="Today at 6:00PM" 
                    image={faker.image.avatar()} 
                    text="hi 3" 
                />
            </ApprovalCard>
            
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));

