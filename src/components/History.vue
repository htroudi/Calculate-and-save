<template>
  <div id="historyContainer">
    <History-controls></History-controls>
    <HistoryDisplay></HistoryDisplay>
  </div>
</template>

<script>
import HistoryControls from "@/components/HistoryControls";
import HistoryDisplay from "@/components/HistoryDisplay";
export default {
  name: "History",
  components: {HistoryDisplay, HistoryControls},
}
</script>

<style scoped>

</style>