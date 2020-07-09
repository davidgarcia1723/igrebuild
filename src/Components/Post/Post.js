import React from "react";

const Post = ( {post} ) => (

      <article className="post">
        <header>
          <div className="postUser">
            <div className="postAvatar">
              <img src={post.avatar} alt={post.alt} />
            </div>
            <div className="postUsername">
              <span>{post.username}</span>
            </div>
          </div>
        </header>
        <div>
          <div className="postImage-bg">
            <img className="postImage" alt={post.alt} src={post.upload} />
          </div>
        </div>
        <div className="postIcons">
          <img src={post.like} alt={'like'} />
          <img src={post.comment} alt={'comment'} />
          <img src={post.share} alt={'share'} />
        </div>
        <div className="postCaption">
          <strong>{post.username}</strong>{" "}{post.caption}
        </div>
      </article>
);
export default Post;

