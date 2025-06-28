// 全記事から投稿idに紐づいてる、記事を取得

import { usePosts } from "@/composables/usePosts";

export const usePostById = async (id: string | number) => {
  const posts = await usePosts();
  //最初にヒットした一件のみを抽出
  return computed(() => posts.value.find((p) => p.id === Number(id)));
};
