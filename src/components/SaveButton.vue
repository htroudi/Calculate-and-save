<template>
  <div id="saveButton">
    <button class="btn btn-success" v-on:click="save()">
      <span class="heart-icon"></span>
      <span>Save</span>
    </button>
  </div>
</template>

<script>
import History from "@/history";

export default {
  name: "SaveButton",
  methods: {
    save() {
      const historyService = new History();
      historyService.update();
    }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart-icon {
  width: 20px;
  height: 20px;
  background-color: green;
  margin-right: 10px;
}
</style>