<template>
  <div id="operationContainer">
    <OperationControls></OperationControls>
    <OperationDisplay></OperationDisplay>
    <History-controls></History-controls>
    <HistoryDisplay></HistoryDisplay>
  </div>
</template>

<script>
import OperationControls from "@/components/OperationControls";
import OperationDisplay from "@/components/OperationDisplay";
import HistoryControls from "@/components/HistoryControls";
import HistoryDisplay from "@/components/HistoryDisplay";
export default {
  name: "Operation",
  components: {HistoryDisplay, HistoryControls, OperationDisplay, OperationControls},
}
</script>

<style scoped>

</style>