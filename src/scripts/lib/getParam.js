export const getParam = (param) =>
  new URLSearchParams(document.location.search).get(param);

export default getParam;
