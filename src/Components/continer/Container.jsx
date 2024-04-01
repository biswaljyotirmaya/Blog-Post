import React from "react";

function Container({ Children }) {
  return <div className="max-w-7xl w-full mx-auto px-4">{Children}</div>;
}

export default Container;
