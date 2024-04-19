<script setup>
defineProps({
  role: {
    type: String,
    required: true,
    validator(value) {
      return ['expand', 'hide'].includes(value)
    }
  }
})
</script>

<template>
  <!--Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools-->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="20"
    viewBox="0 0 18 18"
    :class="{ hide: role === 'hide' }"
  >
    <title>{{ role }}</title>
    <path
      fill="#c94cce"
      d="M5 18a1 1 0 0 1-.4 0 1 1 0 0 1-.6-1V1A1 1 0 0 1 5.7.3l8 8a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-.7.3zM6 3.4v11.2L11.6 9z"
    />
  </svg>
</template>
<style scoped>
.hide {
  transform: rotate(90deg);
}
</style>
