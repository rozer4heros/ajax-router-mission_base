import { v4 as v4uuid } from "uuid";

function PostNew({ onCreate }) {
  console.log("PostNew 렌더됨");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.title.value) {
      alert("제목이 필요합니다!");
      return;
    }

    const _id = v4uuid();
    const _title = e.target.title.value;
    const _content = e.target.content.value;
    const time = new Date();
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const date = String(time.getDate()).padStart(2, "0");
    onCreate({
      id: _id,
      title: _title,
      content: _content,
      createdAt: `${year}-${month}-${date}`,
    });
  };

  return (
    <section>
      <h2>게시물 작성</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="content"></label>
          <textarea name="content" id="content"></textarea>
        </div>
        <button>작성</button>
      </form>
    </section>
  );
}

export default PostNew;
