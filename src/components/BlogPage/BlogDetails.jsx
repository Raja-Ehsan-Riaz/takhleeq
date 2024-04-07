import React from "react";

const BlogDetails = ({ text }) => {
  return <div className="text-lg" dangerouslySetInnerHTML={{__html:text}} ></div>;
};

export default BlogDetails;
