<script setup lang="ts">
const { data: posts, pending, error } = await usePosts();
// const image = useAsset("/6b25b2a9-f2c4-49d1-88d8-24c5e8c31c441.jpg");

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
</script>

<template>
  <v-container class="bg-white">
    <v-img
      src="/6b25b2a9-f2c4-49d1-88d8-24c5e8c31c441.jpg"
      height="300px"
      cover
      class="mb-6"
    ></v-img>
    <!-- <v-img :src="image" height="300px" cover class="mb-6"></v-img> -->

    <v-row>
      <!-- サイドバー -->
      <v-col cols="12" md="3">
        <SidebarMenu />
      </v-col>

      <!-- 投稿一覧 -->
      <v-col cols="12" md="9" class="post">
        <v-row>
          <v-col cols="8" md="6" v-for="post in posts" :key="post.id">
            <nuxtLink :to="`/posts/${post.id}`">
              <v-card
                class="d-flex flex-column justify-space-between"
                style="width: 100%; min-height: 400px"
              >
                <!-- サムネイル画像 -->
                <div style="position: relative">
                  <v-img :src="post.contentsImage" height="180px" cover />

                  <!-- カテゴリー名（右上に表示） -->
                  <div
                    v-if="post.categoryNames"
                    style="
                      position: absolute;
                      top: 8px;
                      right: 8px;
                      background-color: rgba(0, 0, 0, 0.6);
                      color: white;
                      padding: 4px 8px;
                      border-radius: 4px;
                      font-size: 12px;
                    "
                  >
                    {{ post.categoryNames }}
                  </div>
                </div>
                <v-card-title v-html="post.title.rendered" />

                <!-- 作成日 -->
                <div class="px-4" style="font-size: 12px; color: gray">
                  {{ formatDate(post.date) }}
                </div>

                <v-card-text class="post-text">
                  <div v-html="post.excerpt.rendered" />
                </v-card-text>
              </v-card>
            </nuxtLink>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.post .v-card {
  border: none;
  background-color: #f5f5f5;
}

.post .v-card-title {
  color: #333333;
}

.post-text p {
  color: #333333;
  opacity: 0.8;
  font-size: 0.76rem;
}
</style>
