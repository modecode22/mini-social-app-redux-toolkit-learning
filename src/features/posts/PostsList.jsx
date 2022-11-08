import { useSelector } from 'react-redux'
import React from 'react'
import {selectAllPosts} from "./postsSlice"
import PostAuthor from './PostAuthor'
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article className="border-2 rounded-lg border-black" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId}/>
    </article>
  ));
  console.log('====================================');
  console.log(posts);
  console.log('====================================');
  return (
    <section className='p-5 flex flex-col gap-2'>
      <h1 className='flex items-center justify-center font-black text-3xl'>posts</h1>
      {renderedPosts}
    </section>
  );
}

export default PostsList