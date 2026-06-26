import { Link } from "react-router";

function NotFound() {
  console.log("NotFound 렌더됨");

  return (
    <section>
      <h2>404: Page Not Found</h2>
      <p>페이지가 없거나 잘못된 접근입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </section>
  );
}

export default NotFound;
