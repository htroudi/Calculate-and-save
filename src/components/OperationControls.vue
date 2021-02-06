<template>
  <div id="operationControls" class="operation-controls">
    <span class="mr-2">Operation type</span>
    <span class="mr-2">
      <SelectOperator></SelectOperator>
    </span>
    <span>
      <Reset subject="operation"></Reset>
    </span>
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
  justify-content: flex-start;
  margin-bottom: 10px;
}
</style>