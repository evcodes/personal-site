import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getSinglePost } from "../../components/contentManagment/blogPosts";

export function BlogPost(props) {
  let params = useParams();

  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      console.log(params);
      const post = await getSinglePost(params.id);
      console.log(post);
      setPostData(post);
      setLoading(false);
    }
    fetchPost();
  }, []);
  return (
    <div>
      {loading ? (
        <Spin className="blog-loader" tip="Loading post..." />
      ) : (
        <div>
          <h1>Title: {postData.title}</h1>

          <h1>Category: {postData.category}</h1>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
}
