<template>
  <div id="operationControls" class="operation-controls">
    <span>Operation type</span>
    <SelectOperator></SelectOperator>
    <Reset subject="operation"></Reset>
  </div>
</template>

<script>
import SelectOperator from "@/components/SelectOperator";
import Reset from "@/components/Reset";
export default {
  name: "OperationControls",
  components: {Reset, SelectOperator}
}
</script>

<style scoped>
.operation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>