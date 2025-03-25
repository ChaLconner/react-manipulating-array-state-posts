import postData from "../raw-data/post-data";
import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDislike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        // ห้าม likes ติดลบ
        const newLikes = post.likes > 0 ? post.likes - 1 : 0;
        return { ...post, likes: newLikes };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleLike(post.id)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(post.id)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
