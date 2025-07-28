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

useEffect(()=>{
  const savedPosts = loadNoticePosts();
  const found = savedPosts.find((p) => p.id === Number(postId));
  setPost(found);
}, [postId]);

if(!post) return <div>글을 찾을 수 없습니다.</div>

  return(
    <>
    <div className="board-detail">
      <h4>{post.title}</h4>
      <div className="board-detail-top">
        <p>작성자: {post.writer}</p>
        <p>작성일: {post.writingTime}</p>
      </div>
      <div className="board-detail-content">{post.content}</div>
      <button onClick={() => navigate("?")}>목록으로</button>
    </div>
    </>
  )
}

export default NoticeBoardDetail;