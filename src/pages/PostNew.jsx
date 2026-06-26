import { useNavigate } from "react-router";

function PostNew() {
  console.log("PostNew 렌더됨");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>게시물 작성</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="content"></label>
          <textarea id="content"></textarea>
        </div>
        <button>작성</button>
      </form>
    </section>
  );
}

export default PostNew;
