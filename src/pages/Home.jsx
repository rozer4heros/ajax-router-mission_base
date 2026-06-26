import { Link } from "react-router";

function Home({ posts }) {
  let _posts = posts;
  _posts = _posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3)
    .map((p) => (
      <li key={p.id}>
        <Link to={`/posts/${p.id}`}>{p.title}</Link>
      </li>
    ));

  return (
    <section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      <h3>최신 글</h3>
      {_posts.length === 0 ? "게시물이 없습니다." : <ul>{_posts}</ul>}
    </section>
  );
}

export default Home;
