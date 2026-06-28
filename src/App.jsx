import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";

function App() {
  console.log("App 렌더됨");

  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  // fetch
  useEffect(() => {
    fetch("/data/blog.json")
      .then((r) => {
        if (!r) {
          throw new Error(`데이터 불러오기 실패! 데이터가 없거나 경로가 올바르지 않습니다.`);
        } else if (r.ok) {
          return r.json();
        } else {
          throw new Error(`데이터 불러오기 실패! 에러${r.status}: ${r.statusText}`);
        }
      })
      .then((result) => {
        setPosts(result);
        setLoaded(true);
      })
      .catch();
  }, []);

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };
  const handleEdit = (id, _title, _content) => {
    setPosts((prev) =>
      prev.map((post) => (String(post.id) === id ? { ...post, title: _title, content: _content } : post)),
    );
    navigate(`posts/${id}`);
    console.log(posts);
  };
  const handleCreate = (post) => {
    setPosts((prev) => {
      prev.push(post);
      return prev;
    });
    navigate(`posts/${post.id}`);
    console.log(posts);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
          <Route path="posts/:id/edit" element={<PostEdit posts={posts} onEdit={handleEdit} />} />
          <Route path="posts/new" element={<PostNew onCreate={handleCreate} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
