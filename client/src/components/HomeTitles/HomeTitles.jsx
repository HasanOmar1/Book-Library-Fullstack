import React from "react";

export default function HomeTitles({ title, id }) {
  return (
    <div className="title-container">
      <h4 className="titles" id={id}>
        {title}
      </h4>
    </div>
  );
}
