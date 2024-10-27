import React from 'react'

function Post({post}) {
  return (
    <div className="card post_list" style={{width:" 18rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title }
      
    </h5>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.reactions}
    <span class="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">
      {post.body}
    </p>
    {post.tags.map((tag)=>( <span class="badge text-bg-primary m-1">{tag}</span>))}
   
  </div>
</div>
  )
}

export default Post
