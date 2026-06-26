import { useNavigate, useParams } from "react-router";

function PostDetail({ posts, onDelete }) {
  const post = posts.find((p) => p.id === Number(useParams().id));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/posts");
    onDelete(post?.id);
  };

  return (
    <section>
      <h2>{post?.title}</h2>
      <time dateTime={post?.createdAt}>{post?.createdAt}</time>
      <p>{post?.content}</p>
      <button onClick={handleClick}>삭제</button>
    </section>
  );
}

export default PostDetail;
