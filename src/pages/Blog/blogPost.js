import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getSinglePost } from "../../components/contentManagment/blogPosts";

export function BlogPost(props) {
  let params = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    async function fetchPost() {
      console.log(params);
      const post = await getSinglePost(params.id);
      console.log(post);
      setPostData(post);
      // setLoading(false);
    }
    fetchPost();
  }, []);
  return (
    <div>
      Title : {postData.title}
      Author: {postData.author}
      Category: {postData.category}
      Body: {postData.body}
    </div>
  );
}
