import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { postAdded } from "./postsSlice";
import { selectAllUsers } from '../users/usersSlice';
const AddPostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const [userId, setUserId] = useState("")


const users = useSelector(selectAllUsers)

const onTitleCanged = e => setTitle(e.target.value)
const onContentCanged = e => setContent(e.target.value);
const onAuthorCanged = e => setUserId(e.target.value);

const onSavePostClicked = ()=>{
  if(title&&content){
    dispatch(postAdded(title, content, userId));

    setTitle("")
    setContent("");
  }
}
console.log('==============aaa======================');
console.log(userId);
console.log('============aaa========================');
const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

const usersOptions = users.map(user =>(
  <option key={user.id} value={user.id}>
    {user.name}
  </option>
))


  return (
    <section className="gap-2 p-5 flex flex-col items-center justify-center">
      <h2> Add A New Post !</h2>
      <form className="flex flex-col gap-2">
        <div className="grid grid-cols-2">
          <label className="font-bold text-lg" htmlFor="postTitle">
            Post Title
          </label>
          <input
            type="text"
            name="postTitle"
            value={title}
            className="border-2 rounded-lg border-black"
            onChange={onTitleCanged}
          />
        </div>
        <div className="grid grid-cols-2">
          <label className="font-bold text-lg" htmlFor="Author">
            Author
          </label>
          <select name="Author" value={userId} onChange={onAuthorCanged}>
            {usersOptions}
          </select>
        </div>
        <div className="grid grid-cols-2">
          <label className="font-bold text-lg" htmlFor="postContent">
            Post Content
          </label>
          <input
            className="border-2 rounded-lg border-black"
            type="text"
            name="postContent"
            value={content}
            onChange={onContentCanged}
          />
        </div>
        <button
          className="bg-orange-500 disabled:hover:text-black disabled:bg-slate-800 rounded-lg hover:bg-black hover:text-orange-500 duration-100  font-bold text-lg"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          add post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm