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
      <ul>{_posts}</ul>
    </section>
  );
}

export default Posts;
