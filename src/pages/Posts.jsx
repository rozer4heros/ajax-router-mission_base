import { Link } from "react-router";

function Posts({ posts }) {
  let _posts = posts;
  _posts = _posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((p) => (
      <li key={p.id}>
        <Link to={`/posts/${p.id}`}>{p.title}</Link>
      </li>
    ));

  return (
    <section>
      <h2>게시물</h2>
      {_posts.length === 0 ? "게시물이 없습니다." : <ul>{_posts}</ul>}
    </section>
  );
}

export default Posts;
