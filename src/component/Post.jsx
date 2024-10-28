import React from 'react'
import { useContext } from 'react';
import { MdAutoDelete } from "react-icons/md";
import{ PostList} from '../store/Post_Store';

function Post({post}) {
  const {deletePost}= useContext(PostList)
  return (
    <div className="card post_list" style={{width:" 30rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title }
      
    </h5>
    <span key={post.id} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"   onClick={()=>deletePost(post.id)}>
    <MdAutoDelete />
    
  </span>
    <p className="card-text">
      {post.body}
    </p>
    {post.tags.map((tag)=>( <span key={post.tag} className="badge text-bg-primary m-1">{tag}</span>))}
   
  </div>
  <button type="button" className="btn btn-primary">
  Reaction  <span className="badge text-bg-secondary">{post.reactions}</span>
</button>
</div>
  )
}

export default Post
