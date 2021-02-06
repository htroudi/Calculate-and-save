<template>
  <div id="historyControls" class="history-controls">
    <span>Favorites</span>
    <Reset subject="history"></Reset>
  </div>
</template>

<script>
import Reset from "@/components/Reset";
export default {
name: "HistoryControls",
  components: {Reset}
}
</script>

<style scoped>
.history-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>