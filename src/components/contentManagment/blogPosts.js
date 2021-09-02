import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

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
