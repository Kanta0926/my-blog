import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    nextTick(() => Prism.highlightAll());
  }
});
