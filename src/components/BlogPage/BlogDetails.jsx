import React from "react";

const BlogDetails = ({ text }) => {
  return <div className="text-lg text-justify md:text-left" dangerouslySetInnerHTML={{__html:text}} ></div>;
};

export default BlogDetails;
