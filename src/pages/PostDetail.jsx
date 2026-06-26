import { useParams } from "react-router";

function PostDetail({ posts, onDelete }) {
  const post = posts.find((p) => p.id === Number(useParams().id));

  return (
    <section>
      <h2>{post.title}</h2>
      <time dateTime={post.createdAt}>{post.createdAt}</time>
      <p>{post.content}</p>
    </section>
  );
}

export default PostDetail;
