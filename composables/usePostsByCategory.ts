// 全記事をカテゴリーごとに抽出
import { usePosts } from "@/composables/usePosts";

export const usePostsByCategory = async (categoryId: number) => {
  const posts = await usePosts();

  return computed(() =>
    posts.value.filter((post) => post.categories.includes(categoryId))
  );
};
