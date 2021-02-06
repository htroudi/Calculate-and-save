<template>
  <div id="operationContainer">
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

</style>