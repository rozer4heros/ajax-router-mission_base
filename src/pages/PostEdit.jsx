import { useNavigate } from "react-router";

function PostEdit() {
  console.log("PostEdit 렌더됨");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>게시물 수정</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" id="title" defaultValue="" />
        </div>
        <div>
          <label htmlFor="content"></label>
          <textarea id="content" defaultValue=""></textarea>
        </div>
        <button>수정</button>
      </form>
    </section>
  );
}

export default PostEdit;
