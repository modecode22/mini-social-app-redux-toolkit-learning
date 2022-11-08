import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers)

  const author = users.find(user => user.id === userId)
  console.log('====================================');
  console.log(userId);
  console.log('====================================');
  return (
    <div>By {author ? author.name : "Unknown author"}</div>
  )
}

export default PostAuthor