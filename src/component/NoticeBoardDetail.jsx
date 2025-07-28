import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loadNoticePosts } from ".";

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
    <div>
      <h2>{post.title}</h2>
      <p>작성자: {post.writer}</p>
      <p>작성일: {post.writingTime}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate("?")}>목록으로</button>
    </div>
    </>
  )
}

export default NoticeBoardDetail;