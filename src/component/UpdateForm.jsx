// import { useParams, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { loadNoticePosts } from '.'; // 데이터 로딩 함수

function NoticeBoardEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);
//   const [formData, setFormData] = useState({ title: '', content: '' });

//   useEffect(() => {
//     const posts = loadNoticePosts();
//     const found = posts.find((p) => p.id === Number(id));
//     if (found) {
//       setPost(found);
//       setFormData({ title: found.title, content: found.content });
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = () => {
//     const posts = loadNoticePosts();
//     const updatedPosts = posts.map((p) =>
//       p.id === Number(id) ? { ...p, ...formData } : p
//     );
//     localStorage.setItem('noticePosts', JSON.stringify(updatedPosts));
//     alert('수정되었습니다.');
//     navigate(`/notice/${id}`);
//   };

//   if (!post) return <div>글을 불러오는 중입니다...</div>;

  return (
    <div>
      <h3>공지사항 수정</h3>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>수정 완료</button>
      <button onClick={() => navigate(-1)}>취소</button>
    </div>
  )
}

export default NoticeBoardEdit;
