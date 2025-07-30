const pathMap = {
  // 학회안내
  '인사말' : {category: 'intro', id: 'greeting'},
  '학회연혁' : {category: 'intro', id: 'history'},
  '조직 및 위원회' : {category: 'intro', id: 'committee'},

  // 학회지
  '투고규정': {category:'journal', id:'guidelines'},
  '미술사학보 논문검색': { external: 'https://www.dbpia.co.kr/journal/publicationDetail?publicationId=PLCT00016071' },

  // 논문투고
  '투고절차 및 작성요령': { category: 'submit', id: 'procedure' },
  '논문유사도검사': { external: 'https://www.copykiller.com/' },
  '온라인 논문투고': { external: 'https://karthistory.jams.or.kr/' },

  // 학회소식
  '공지사항': { category: 'news', id: 'notice' },
}

const notes = {
  greeting : {
    name: '인사말',
    image: "/image/회장-인사말.jpg"
  },
  history : {
    name: '학회연혁',
    image: '/image/학회연혁.jpg'
  },
  committee : {
    name: '조직 및 위원회',
    image: '/image/조직및위원회.jpg'
  },
  guidelines : {
    name: '투고규정',
    image: '/image/투고규정.jpg'
  },
  procedure: {
    name: '투고절차 및 작성요령',
    image: '/image/투고절차및작성요령.jpg'
  }
}

export {pathMap, notes};