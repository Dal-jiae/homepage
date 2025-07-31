import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loadNoticePosts } from ".";
import './NoticeBoard.css'

function NoticeBoardDetail() {
// 공지사항 상세보기
const [searchParams] = useSearchParams();
const postId = searchParams.get('post');
const [post, setPost] = useState(null);
const navigate = useNavigate();
const savedPosts = loadNoticePosts();

useEffect(()=>{
  const found = savedPosts.find((p) => p.id === Number(postId));
  setPost(found);
}, [postId]);

if(!post) return <div>글을 찾을 수 없습니다.</div>

const deleteBoard = () => {
  const updatedPosts = savedPosts.filter((p) => p.id !== Number(postId));
  localStorage.setItem("noticePosts", JSON.stringify(updatedPosts));
  alert("삭제되었습니다.");
  navigate("/detail/news/notice");
}

const moveToUpdate = () => {
  navigate(`/detail/news/notice?post=${postId}&mode=edit`);
}

  return(
    <>
    <div className="board-container">
    <h3 className="board-title">공지사항</h3>

      <div className="board-detail">
        <h4>{post.title}</h4>
        <div className="board-detail-top">
          <p>작성자: {post.writer}</p>
          <p>작성일: {post.writingTime}</p>
        </div>
        <div className="board-detail-content">{post.content}</div>
        <div className="board-detail-edit">
          <button onClick={moveToUpdate}>수정</button>
          <button onClick={deleteBoard}>삭제</button>
        </div>
        <button onClick={() => navigate("?")}>목록으로</button>
      </div>
      
    </div>
    </>
  )
}

export default NoticeBoardDetail;