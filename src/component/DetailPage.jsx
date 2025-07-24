import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{decodedTitle}</h2>
      <p>이곳은 '{decodedTitle}'에 대한 상세 페이지입니다.</p>
      {/* 여기에 콘텐츠 넣기 */}
    </div>
  );
}

export default DetailPage;
