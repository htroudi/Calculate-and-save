<template>
  <div id="saveButton" class="save-btn">
    <button class="btn btn-outline-dark" v-on:click="save()">
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
.save-btn {
  display: inline-block;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.heart-icon {
  width: 20px;
  height: 20px;
  background-image: url("~@/assets/heart-solid.svg");
  background-size: contain;
  background-position: center;
  margin-right: 10px;
}
</style>