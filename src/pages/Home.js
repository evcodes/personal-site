import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";
import { listPosts } from "../graphql/queries";

//styling
import { Button } from "antd";
const initialState = { title: "", body: "" };

export default function Home() {
  const [formState, setFormState] = useState(initialState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      console.log(postData);
      const posts = postData.data.listPosts.items;
      setPosts(posts);
    } catch (err) {
      console.log("error fetching posts");
    }
  }

  async function addPost() {
    try {
      if (!formState.title || !formState.body) return;
      const post = { ...formState };
      setPosts([...posts, post]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPost, { input: post }));
    } catch (err) {
      console.log("error creating post:", err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput("title", event.target.value)}
        style={styles.input}
        value={formState.title}
        placeholder="title"
      />
      <input
        onChange={(event) => setInput("body", event.target.value)}
        style={styles.input}
        value={formState.body}
        placeholder="body"
      />
       <input
        onChange={(event) => setInput("category", event.target.value)}
        style={styles.input}
        value={formState.category}
        placeholder="App Category"
      />
      <button style={styles.button} onClick={addPost}>
        Create Post
      </button>
      {posts.map((post, index) => (
        <div key={post.id ? post.id : index} style={styles.post}>
          <p style={styles.postTitle}>{post.title}</p>
          <p style={styles.postBody}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
