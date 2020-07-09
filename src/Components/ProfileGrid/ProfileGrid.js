import React from "react";

const Grid = ( {grid} ) => (

      <article className="post">
        <header>
        </header>
        <div className="postImage">
          <div className="postImage-bg">
            <img alt={grid.alt} src={grid.upload} />
          </div>
        </div>
      </article>
);
export default Grid;

