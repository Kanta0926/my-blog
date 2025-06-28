<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id;
const post = await usePostById(postId);
</script>

<template>
  <v-container>
    <v-row class="id-post d-felx justify-space-around">
      <v-col cols="12" md="3">
        <SidebarMenu />
      </v-col>

      <v-col cols="12" md="8">
        <v-card>
          <!-- タイトル -->
          <v-card-title v-html="post?.title.rendered" />

          <div class="">
            <!-- サムネ -->
            <v-img :src="post.contensImage" height="20rem" cover />

            <!-- カテゴリー -->
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

          <v-card-text>
            <div v-html="post?.content.rendered" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.id-post.v-row {
  background-color: white;
}

.id-post .v-card--variant-elevated {
  background-color: white;
  color: #333333;
}

.id-post .v-card-text {
  line-height: 2.4;
  font-size: 1rem;
  padding: 1.6rem;
}
</style>
