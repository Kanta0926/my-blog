export const usePosts = async () => {
  const { data } = await useFetch<any[]>(
    "https://xs666826.xsrv.jp/wp-json/wp/v2/posts?_embed&categories=4,8"
  );

  const cleanedData = computed(() => {
    return (
      data.value?.map((post) => {
        const image =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/PXL_20250506_070000812.MP.png";

        // カテゴリー名の取得
        const categories = post._embedded?.["wp:term"]?.[0] ?? [];
        const categoryNames = categories.map((cat: any) => cat.name);

        return {
          ...post,
          contensImage: image,
          categoryNames,
          excerpt: {
            ...post.excerpt,
            rendered: post.excerpt.rendered
              .replace(/<a[^>]*>\s*\[&hellip;\]\s*<\/a>/g, "")
              .replace(/<a[^>]*>\s*…\s*<\/a>/g, "")
              .replace(/<a[^>]*>\s*\[\.\.\.\]\s*<\/a>/g, "")
              .replace(/\[\.\.\.\]/g, "..."),
          },
        };
      }) ?? []
    );
  });

  return cleanedData;
};
