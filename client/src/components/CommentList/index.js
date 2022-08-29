import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <div className="">
        <h3 className="">Comments</h3>
      </div>
      <div className="">
        {comments &&
          comments.map(comment => (
            <div key={comment._id}>
                <h4>Written By {comment.username} on {comment.createdAt}</h4>
            <p className="">
                
              {comment.commentText} {' '}
             
            </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;