import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
          <Route path="posts/:id/edit" element={<PostEdit />} />
          <Route path="posts/new" element={<PostNew />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
