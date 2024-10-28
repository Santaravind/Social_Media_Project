import React, { useContext, useRef } from 'react'
import { PostList } from '../store/Post_Store';

function CreatePost() {
  const {addPost}= useContext(PostList)

const userIdEle=useRef();
const posttitelEle=useRef();
const bodyEle =useRef();
const reactionsEle=useRef();
const tagsEle=useRef();

 const handlSubmit=(event)=>{
    event.preventDefault();
    const userID=userIdEle.current.value;
    const posttitle=posttitelEle.current.value;
    const body=bodyEle.current.value;
    const reaction=reactionsEle.current.value;
    const tags=tagsEle.current.value.split(" ");

    

    addPost(userID,posttitle,body,reaction,tags);
    userIdEle.current.value=" ";
    posttitelEle.current.value=" ";
    bodyEle.current.value=" ";
    reaction=reactionsEle.current.value=" ";
    tagsEle.current.value=" ";
   
 }
 

  return (
    <form className='create-post' onSubmit={handlSubmit}>

<div class="mb-3 ">
  <center> <h1>Create Your Post </h1>   </center> 
    <label for="title" class="form-label">
     User Id
      </label>
    <input type="text" 
    ref={userIdEle}
    placeholder='Enter your user id '
    class="form-control" 
    id="title" />
    
  </div>

  
    <div class="mb-3 ">
    <label for="title" class="form-label">
      Post Title
      </label>
    <input type="text" 
    ref={posttitelEle}
    placeholder='Enter your post title'
    class="form-control" 
    id="title" />
  </div>

  <div class="mb-3 ">
    <label for="body" class="form-label">
      Post Content
      </label>
    <textarea type="text" 
    row="4"
    ref={bodyEle}
    placeholder='more about your content'
    class="form-control" 
    id="body" >
      </textarea>
  </div>

  <div class="mb-3 ">
    <label for="title" class="form-label">
      Number of reaction
      </label>
    <input type="text" 
    ref={reactionsEle}
    placeholder='Enter your post title'
    class="form-control" 
    id="title" />
  </div>
 

  <div class="mb-3 ">
    <label for="tags" class="form-label">
      HashTags 
      </label>
    <input type="text" 
    ref={tagsEle}
    placeholder='Enter your hash tags'
    class="form-control" 
    id="tag" />
  </div>
  
  
  <button type="submit" class="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost
