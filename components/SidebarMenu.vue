<script setup>
/* ─ 投稿取得コンポーザブル ─ */
const { data: cleanedData } = await usePosts();

/* 例：先頭投稿の author 情報を流用（author オブジェクトは前回答で追加済み） */
const author = computed(() => cleanedData.value[0]?.author ?? null);

const category4 = await usePostsByCategory(4);
const category8 = await usePostsByCategory(8);
</script>

<template>
  <v-list dense nav class="sidebar">
    <v-list-item v-if="author" class="py-4 auther-inner">
      <template #prepend>
        <v-avatar :image="author.avatar" size="56" />
      </template>

      <v-list-item-title class="font-weight-bold">
        {{ author.name }}
      </v-list-item-title>
      <v-list-item-subtitle class="side-text-inner">
        {{ author.bio }}
      </v-list-item-subtitle>
    </v-list-item>

    <v-divider class="my-2" />

    <v-list-subheader>カテゴリ4の記事</v-list-subheader>
    <v-list-item
      v-for="post in category4"
      :key="post.id"
      :to="`/posts/${post.id}`"
    >
      <v-list-item-title>{{ post.title.rendered }}</v-list-item-title>
    </v-list-item>

    <v-list-subheader>カテゴリ8の記事</v-list-subheader>
    <v-list-item
      v-for="post in category8"
      :key="post.id"
      :to="`/posts/${post.id}`"
    >
      <v-list-item-title>{{ post.title.rendered }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style>
.sidebar .auther-inner {
  color: #333333;
}

.sidebar.v-list {
  background-color: #f5f5f5;
  padding: unset;
  height: 100%;
  place-content: baseline;
}

.sidebar .side-text-inner {
  font-size: 0.68rem;
  height: 12rem;
}

.sidebar .v-list-subheader {
  color: #333333;
}

.sidebar a {
  color: #333333;
  background-color: white;
}

.sidebar.v-list .v-list-item--nav:not(:only-child) {
  margin: unset;
}

.sidebar .v-list-item--nav .v-list-item-title {
  font-size: 0.76rem;
  opacity: 0.8;
}
</style>
