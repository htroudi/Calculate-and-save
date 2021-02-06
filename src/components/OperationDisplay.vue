<template>
  <div id="operationDisplay" class="operation-display">
    <InputOperand position="Left"></InputOperand>
    <span class="operation-sign">{{this.$store.getters.operator}}</span>
    <InputOperand position="Right"></InputOperand>
    <span class="equals-sign">=</span>
    <span class="result">{{this.$store.getters.result}}</span>
    <save-button></save-button>
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>