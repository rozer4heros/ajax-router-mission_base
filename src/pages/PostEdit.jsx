import { useParams } from "react-router";

function PostEdit({ posts, onEdit }) {
  console.log("PostEdit 렌더됨");

  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.title.value) {
      alert("제목이 필요합니다!");
      return;
    }

    const _title = e.target.title.value;
    const _content = e.target.content.value;
    onEdit(id, _title, _content);
  };

  return (
    <section>
      <h2>게시물 수정</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" name="title" id="title" defaultValue={post?.title} />
        </div>
        <div>
          <label htmlFor="content"></label>
          <textarea name="content" id="content" defaultValue={post?.content}></textarea>
        </div>
        <button>수정</button>
      </form>
    </section>
  );
}

export default PostEdit;
