import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadNoticePosts } from '.'; // 데이터 로딩 함수

function UpdateForm() {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('post'); // postId를 URL 파라미터에서 가져옴
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({ 
    title: '', 
    content: '',
    writingTime: ''
  });

  useEffect(() => {
    const posts = loadNoticePosts();
    const found = posts.find((p) => p.id === Number(postId));
    if (found) {
      const now = new Date().toLocaleString(); // 현재 시간을 문자열로 변환
      setPost(found);
      setFormData({ 
        title: found.title, 
        content: found.content,
        writingTime: now,
      });
    }
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const posts = loadNoticePosts();
    const updatedPosts = posts.map((p) =>
      p.id === Number(postId) ? 
      { ...p, ...formData,
        writingTime: new Date().toLocaleString() // 수정 시 작성 시간을 현재 시간으로 업데이트
       } 
      : p
    );
    localStorage.setItem('noticePosts', JSON.stringify(updatedPosts));
    alert('수정되었습니다.');
    navigate(`/detail/news/notice?post=${postId}`); // 수정 후 상세 페이지로 이동
  };

  if (!post) return <div>글을 불러오는 중입니다...</div>;

  return (
    <div className="board-container" >
      <h3 className="board-title">공지사항</h3>

      <div className="writer-box" 
      style={{
      borderBottom: '1px solid lightslategray'
      }}>

        <div 
        style={{
          borderTop: '5px solid #757575',
          borderBottom: '1px solid lightslategray',
          backgroundColor: '#f5f5f5',
          padding: '2rem',
          margin: '0',
          textAlign: 'center',
        }}
        >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '1.5rem',
            borderRadius: '5px',
            boxSizing: 'border-box',
          }}
        />
        </div>

        <div className="board-detail-top"
        style={{
          display: 'flex',
          borderBottom: '1px solid lightslategray',
          marginBottom: '10px'
        }}>
          <p>작성자: {post.writer}</p>
          <p>작성일: {formData.writingTime}</p>
        </div>

        <div className="writer-text">
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            fontSize: '1.5rem',
            marginTop: '10px'
          }}
        />
        </div>

        <div className="board-detail-edit">
          <button onClick={handleUpdate}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>수정 완료</button>
          <button onClick={() => navigate(-1)} 
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm;
