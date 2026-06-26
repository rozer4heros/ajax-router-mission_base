import { useNavigate, useParams } from "react-router";

function PostDetail({ posts, onDelete }) {
  console.log("PostDetail 렌더됨");

  // 해결법 제공: claude.ai
  // ❌ 문제: useParams()가 find() 콜백 안에서 호출됨
  //const post = posts.find((p) => p.id === Number(useParams().id));
  // ✅ 해결: useParams()를 먼저 독립적으로 호출
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  const navigate = useNavigate();

  const handleEdit = () => {};
  const handleDelete = () => {
    navigate("/posts");
    onDelete(post?.id);
  };

  return (
    <section>
      <h2>{post?.title}</h2>
      <time dateTime={post?.createdAt}>{post?.createdAt}</time>
      <p>{post?.content}</p>
      <button onClick={handleEdit}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </section>
  );
}

export default PostDetail;
