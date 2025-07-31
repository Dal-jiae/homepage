import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadNoticePosts, saveNoticePosts } from ".";
import './NoticeBoard.css'

function NoticeBoardWrite() {
// 공지사항 작성, 글쓰기 버튼을 누를 시
  const navigate = useNavigate();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title, 
      writer,
      content,
      // 숫자나 날짜 객체를 문자열로 변환
      writingTime: new Date().toLocaleString(),
    };
    const savedPosts = loadNoticePosts();
    const updatePosts = [...savedPosts, newPost];
    saveNoticePosts(updatePosts);
    alert("등록되었습니다.");
    navigate("/detail/news/notice");
  }

  const backToBoard = () => {
    navigate('/detail/news/notice')
  }

  return(
    <>
    <div className="board-container">
      <h3 className="board-title">공지사항</h3>
      
      <div className="writer-box">
        <h4>글쓰기</h4>

        <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group1">
            <span>제목</span>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              required
            />
          </div>

          <div className="input-group2">
            <span>작성자</span>
            <input
              type="text"
              placeholder="작성자"
              value={writer}
              onChange={(e)=> setWriter(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="writer-text">
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
          required
        />
        </div>

        <div className="button-group">
          <button type='submit'>저장</button>
          <button type='button' onClick={backToBoard}>취소</button>
        </div>
      </form>

      </div>
    </div>
    </>
  )
}

export default NoticeBoardWrite;