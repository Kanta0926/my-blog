<script setup>
const { data: category4 } = await useFetch(
  "https://xs666826.xsrv.jp/wp-json/wp/v2/posts?categories=4"
);
const { data: category8 } = await useFetch(
  "https://xs666826.xsrv.jp/wp-json/wp/v2/posts?categories=8"
);
</script>

<template>
  <v-list dense nav>
    <v-list-subheader>カテゴリ4の記事</v-list-subheader>
    <v-list-item
      v-for="post in category4"
      :key="post.id"
      :to="`/post/${post.id}`"
    >
      <v-list-item-title>{{ post.title.rendered }}</v-list-item-title>
    </v-list-item>

    <v-list-subheader>カテゴリ8の記事</v-list-subheader>
    <v-list-item
      v-for="post in category8"
      :key="post.id"
      :to="`/post/${post.id}`"
    >
      <v-list-item-title>{{ post.title.rendered }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style></style>
