export const loadNoticePosts = () => {
  return JSON.parse(localStorage.getItem("noticePosts")) || [];
}

export const saveNoticePosts = (posts) => {
  localStorage.setItem("noticePosts", JSON.stringify(posts));
}