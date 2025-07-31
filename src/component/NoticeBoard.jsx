import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadNoticePosts } from ".";
import './NoticeBoard.css'
import dummyposts from "./dummypost";

function NoticeBoard() {
// 공지사항 목록
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = loadNoticePosts();
     if (!saved || saved.length === 0) {
      localStorage.setItem("noticePosts", JSON.stringify(dummyposts));
      setPosts(dummyposts);
    } else {
    setPosts(saved);
    }}, []);

  const handleWrite = () =>{
    navigate('?mode=write');
  }

  return(
    <>
    <div className="board-container">
      <h3 className="board-title">공지사항</h3>
      
      <table className="board-posts">
        <thead>
        <tr>
          <th style={{width:'10%'}}>번호</th>
          <th style={{width:'40%'}}>제목</th>
          <th style={{width:'20%'}}>작성자</th>
          <th style={{width:'30%'}}>작성시간</th>
        </tr>
        </thead>
        <tbody>
        {posts.slice().reverse().map((post, i) => {
          return(
          <tr key={post.id}>
            <td>{posts.length - i}</td>
            <td><Link to={`?post=${post.id}`}>{post.title}</Link></td>
            <td><span>{post.writer}</span></td>
            <td><span>{post.writingTime}</span></td>
          </tr>
          );
        })}
        </tbody>
      </table>

      <button className="button-write" onClick={handleWrite}>글쓰기</button>
    </div>
    </>
  )
}

export default NoticeBoard;