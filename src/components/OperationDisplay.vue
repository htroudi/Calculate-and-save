<template>
  <div id="operationDisplay" class="operation-display">
    <div class="operation-display-inner">
      <InputOperand position="Left"></InputOperand>
      <span class="operation-sign mr-2 ml-2">{{this.$store.getters.operator}}</span>
      <InputOperand position="Right"></InputOperand>
      <span class="equals-sign mr-2 ml-2">=</span>
      <span class="result mr-2">{{this.$store.getters.result}}</span>
      <save-button></save-button>
    </div>
  </div>
</template>

<script>
import InputOperand from "@/components/InputOperand";
import SaveButton from "@/components/SaveButton";
export default {
  name: "OperationDisplay",
  components: {SaveButton, InputOperand}
}
</script>

<style scoped>
.operation-display {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
}
.operation-display-inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>