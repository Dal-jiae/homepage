import { useNavigate } from 'react-router-dom';
import './ListDetail.css'
import { pathMap } from './PathMap';

function ListDetail({show}){
  const navigate = useNavigate();

  const list = [
    { key: 'intro',
      title: '학회안내',
      items: ['인사말', '학회연혁', '조직 및 위원회']
    },
    { key: 'journal',
      title: '학회지',
      items: ['투고규정', '미술사학보 논문검색']
    },
    { key: 'submit',
      title: '논문투고',
      items: ['투고절차 및 작성요령', '논문유사도검사', '온라인 논문투고']
    },
    { key: 'news',
      title: '학회소식',
      items: ['공지사항']
    },
  ];

  const handleClick = (item) => {
    const route = pathMap[item];

    if (route.external) {
      window.open(route.external, '_blank');
    } else {
      navigate(`/detail/${route.category}/${route.id}`);
    }
  }

  return(
    <>
      <div className={`list-detail-container ${show? 'show' : ''}`}>
      {
        list.map((category) => {
          return (
           <div key={category.key} className="category-section">
            <ul className="item-list">
              {
              category.items.map( (item) => {
                return (
                <li
                  key={item}
                  className="item"
                  onClick={() => handleClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  {item}
                </li>
                )
              })
              }
            </ul>
          </div>
          )
        })
      }
      </div>
    </>
  )
}

export default ListDetail;