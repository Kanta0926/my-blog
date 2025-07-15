// カテゴリーの全記事取得
import { useAsyncData } from "#app";

export const usePosts = () =>
  useAsyncData("posts", async (): Promise<ProcessedPost[]> => {
    const posts = await $fetch<any[]>(
      "https://xs666826.xsrv.jp/wp-json/wp/v2/posts?_embed&categories=4,8"
    );

    return posts.map((post) => {
      // アイキャッチ
      const image =
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/PXL_20250506_070000812.MP.png";

      // カテゴリー名
      const categories = post._embedded?.["wp:term"]?.[0] ?? [];
      const categoryNames = categories.map((cat: any) => cat.name);

      // 著者プロフィール
      const author = post._embedded?.author?.[0];
      const authorInfo = {
        id: author?.id,
        name: author?.name ?? "Unknown",
        avatar: author?.avatar_urls?.["96"],
        bio: author?.description ?? "",
      };

      // 抜粋整形
      const excerptRendered = post.excerpt.rendered
        .replace(/<a[^>]*>\s*\[&hellip;\]\s*<\/a>/g, "")
        .replace(/<a[^>]*>\s*…\s*<\/a>/g, "")
        .replace(/<a[^>]*>\s*\[\.\.\.\]\s*<\/a>/g, "")
        .replace(/\[\.\.\.\]/g, "...");

      return {
        ...post,
        contentsImage: image,
        categoryNames,
        author: authorInfo,
        excerpt: { ...post.excerpt, rendered: excerptRendered },
      };
    });
  });
