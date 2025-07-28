import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadNoticePosts } from ".";

function NoticeBoard() {
// 공지사항 목록
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = loadNoticePosts();
     if (!saved || saved.length === 0) {
      const dummy = [
      {
        id: Date.now(),
        title: "첫 번째 공지사항",
        writer: "관리자",
        content: "집에 가고 싶어요",
        writingTime: new Date().toLocaleString(),
      },
      {
        id: Date.now() + 1,
        title: "두 번째 공지사항",
        writer: "운영자",
        content: "공지사항 내용입니다.",
        writingTime: new Date().toLocaleString(),
      },
      {
        id: Date.now() + 2,
        title: "세 번째 공지사항",
        writer: "관리자",
        content: "추가 공지사항입니다.",
        writingTime: new Date().toLocaleString(),
      },
      ];
      localStorage.setItem("noticePosts", JSON.stringify(dummy));
      setPosts(dummy);
    } else {
    setPosts(saved);
    }}, []);

  const handleWrite = () =>{
    navigate('?mode=write');
  }

  return(
    <>
    <div className="board-container">
      <h3 className="board-title">게시판</h3>
      <button onClick={handleWrite}>글쓰기</button>
      
      <ul className="board-posts">
        {posts.map((post) => {
          return(
          <li key={post.id}>
            <Link to={`?post=${post.id}`}>{post.title}</Link>
            <span> 작성자 : {post.writer}</span>
            <span> | 작성 시간 : {post.writingTime}</span>
          </li>
          );
        })}
      </ul>

    </div>
    </>
  )
}

export default NoticeBoard;