import React from 'react';

const Comment = (props) => {
  return (
    <p>{props.comment.name} - {props.comment.url}</p>
  )
}

export default Comment;
