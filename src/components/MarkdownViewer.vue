<template>
  <div v-html="compiledMarkdown" class="markdown-content"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { marked } from 'marked'

export default defineComponent({
  name: 'MarkdownViewer',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const compiledMarkdown = ref('')

    onMounted(() => {
      compiledMarkdown.value = marked(props.content)
    })

    return {
      compiledMarkdown,
    }
  },
})
</script>

<style scoped>
/* Styles for the markdown content */
.markdown-content {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.3em;
}

.markdown-content p {
  margin: 1em 0;
}

.markdown-content a {
  color: #3490dc;
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content ul,
.markdown-content ol {
  padding-left: 2em;
}

.markdown-content code {
  background-color: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
</style>
