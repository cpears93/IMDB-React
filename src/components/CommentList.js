import React, { Fragment } from 'react';
import Comment from './Comment.js'

const CommentList = (props) => {

  const commentNodes =
  props.comments.map((comment) => {
    return <Comment comment={comment} key={index} />
  })

  return (
    <Fragment>
     {commentNodes}
    </Fragment>
  )
}

export default CommentList;
