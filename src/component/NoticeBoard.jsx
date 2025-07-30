import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadNoticePosts } from ".";
import './NoticeBoard.css'

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
        title: "[시스템 점검 안내] 8월 5일(월) 오전 2시 ~ 5시",
        writer: "관리자",
        content: "집에 가고 안녕하세요, 미술사학연구회 회원 여러분. 원활한 서비스 제공을 위해 8월 5일 월요일 오전 2시부터 5시까지 시스템 점검이 진행됩니다. 점검 시간 동안 서비스 이용이 일시적으로 제한될 수 있으니 이용에 참고 부탁드립니다. 감사합니다.",
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