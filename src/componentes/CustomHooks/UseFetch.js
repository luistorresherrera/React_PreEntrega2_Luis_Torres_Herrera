export const useFetch = async (url) => {
  let result = [];
  result = await fetch(url);
  return await result.json();
};
