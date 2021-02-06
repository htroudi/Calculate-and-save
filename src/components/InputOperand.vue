<template>
  <label class="input-label">
    <input type="number" v-model="number" v-on:input="onChange()">
  </label>
</template>

<script>
import Calculate from "@/calculate";

export default {
  name: "InputOperand",
  props: {
    position: String,
  },
  computed: {
    number: {
      get () {
        let num = 0;
        if (this.position === 'Left') {
          num = this.$store.state.operation.left
        } else if (this.position === 'Right') {
          num = this.$store.state.operation.right
        }
        return num;
      },
      set (value) {
        this.$store.commit("set" + this.position, value)
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
.input-label {
  margin-bottom: 0;
}
</style>