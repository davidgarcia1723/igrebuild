import React from "react";

const Grid = ( {grid} ) => (

      <article className="post">
        <header>
          <div className="postUser">
            <div className="postAvatar">
              <img src={grid.avatar} alt={grid.alt} />
            </div>
            <div className="postUsername">
              <span>{grid.username}</span>
            </div>
          </div>
        </header>
        <div className="postImage">
          <div className="postImage-bg">
            <img alt={grid.alt} src={grid.upload} />
          </div>
        </div>
      </article>
);
export default Grid;

