<template>
  <div id="selectOperator">
    <label>
      <select v-model="selected" v-on:change="onChange()">
        <option value="+" selected>Addition</option>
        <option value="-">Subtraction</option>
        <option value="*">Multiplication</option>
        <option value="/">Division</option>
      </select>
    </label>
  </div>
</template>

<script>
import Calculate from "@/calculate";

export default {
  name: "SelectOperator",
  computed: {
    selected: {
      get () {
        return this.$store.state.operation.operator;
      },
      set (value) {
        this.$store.commit("setOperator", value)
      }
    }
  },
  methods: {
    onChange() {
      const calculateService = new Calculate();
      calculateService.updateResult();
    }
  }

}
</script>

<style scoped>

</style>