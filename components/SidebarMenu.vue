<script setup>
const category4 = await usePostsByCategory(4);
const category8 = await usePostsByCategory(8);
</script>

<template>
  <v-list dense nav class="sidebar">
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
.sidebar.v-list {
  background-color: #f5f5f5;
  padding: unset;
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
