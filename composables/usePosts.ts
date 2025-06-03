// composables/usePosts.ts
export const usePosts = async () => {
  const { data } = await useFetch("https://example.com/wp-json/wp/v2/posts");
  return data;
};
