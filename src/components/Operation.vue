<template>
  <div id="operationContainer" class="operation-container">
    <OperationControls></OperationControls>
    <OperationDisplay></OperationDisplay>
  </div>
</template>

<script>
import OperationControls from "@/components/OperationControls";
import OperationDisplay from "@/components/OperationDisplay";
export default {
  name: "Operation",
  components: {OperationDisplay, OperationControls},
}
</script>

<style scoped>
.operation-container {
  margin-bottom: 50px;
}
</style>