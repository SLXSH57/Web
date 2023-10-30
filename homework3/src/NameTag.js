import React from "react";

const NameTag = (props) => {
  const deleteByIndex = () => props.removeName(props.index);
  return (
    <div className="name-tag">
      <h3 className="title">Remember</h3>
      <p className="subtitle">to</p>
      <h2 className="name">{props.name}</h2>
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

export default NameTag;
