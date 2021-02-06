<template>
  <div id="resetButton" class="reset-btn">
    <button class="btn btn-outline-dark" v-on:click="reset()">
      <span class="refresh-icon"></span>
      <span>Reset</span>
    </button>
  </div>
</template>

<script>

import History from "@/history";

export default {
  name: "Reset",
  props: {
    subject: String,
    item: Number,
  },
  methods: {
    reset() {
      if (this.subject === 'operation') {
        this.$store.commit('setLeft', 0);
        this.$store.commit('setRight', 0);
        this.$store.commit('setOperator', '+');
        this.$store.commit('setResult', 0);
      } else if (this.subject === 'history') {
        const historyService = new History();
        historyService.reset();
      } else if (this.subject === 'favorite') {
        const historyService = new History();
        historyService.delete(this.item);
      }
    }
  }
}
</script>

<style scoped>
.reset-btn {
  display: inline-block;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.refresh-icon {
  width: 20px;
  height: 20px;
  background-image: url("~@/assets/trash-alt-solid.svg");
  background-size: contain;
  background-position: center;
  margin-right: 10px;
}
</style>