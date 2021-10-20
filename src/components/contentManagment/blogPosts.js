import { API, graphqlOperation } from "aws-amplify";
import { listPosts, getPost } from "../../graphql/queries";

export async function getBlogPosts() {
  try {
    const postData = await API.graphql(graphqlOperation(listPosts));
    console.log(postData);
    const posts = postData.data.listPosts.items;
    console.log(posts);
    return posts;
  } catch (err) {
    console.log("error fetching posts");
  }
}

export async function getSinglePost(postId) {
  try {
    console.log(postId);
    const blogPost = await API.graphql(
      graphqlOperation(getPost, { id: postId })
    );
    return blogPost.data.getPost;
    console.log(blogPost);
  } catch (err) {
    console.log(err);
  }
}
