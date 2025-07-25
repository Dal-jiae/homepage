const pathMap = {
  // 학회안내
  '인사말' : {category: 'intro', id: 'greeting'},
  '학회연혁' : {category: 'intro', id: 'history'},
  '조직 및 위원회' : {category: 'intro', id: 'committee'},

  // 학회지
  '투고규정': {category:'journal', id:'guidelines'},
  '미술사학보 논문검색': { category: 'journal', id: 'search' },

  // 논문투고
  '투고절차 및 작성요령': { category: 'submit', id: 'procedure' },
  '논문유사도검사': { external: 'https://www.copykiller.com/' },
  '온라인 논문투고': { external: 'https://karthistory.jams.or.kr/' },

  // 학회소식
  '공지사항': { category: 'news', id: 'notice' },
  '정기학술대회': { category: 'news', id: 'conference' },
  '심포지엄': { category: 'news', id: 'symposium' }
}

export default pathMap;