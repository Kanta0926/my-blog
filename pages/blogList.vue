// BlogList.vue など import axios from 'axios'; export default { data() { return
{ posts: [], }; }, async created() { const res = await
axios.get('https://yourdomain.com/wp-json/wp/v2/posts'); this.posts = res.data;
}, };
