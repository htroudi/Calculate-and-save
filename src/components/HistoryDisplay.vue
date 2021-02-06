<template>
  <div id="historyDisplay" class="history-display">
    <table>
      <thead>
        <tr>
          <td v-for="attribute in this.header" :key="attribute">
            {{attribute}}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(operation, index) in this.operations" v-bind:key="index">
          <td v-for="attribute in operation" :key="attribute">
            {{attribute}}
          </td>
          <td><reset subject="favorite" :item="operations.length - index - 1"></reset></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Reset from "@/components/Reset";
export default {
  name: "HistoryDisplay",
  components: {Reset},
  data: function () {
    return {
      header: this.$store.getters.header,
    }
  },
  computed: {
    operations: {
      get () {
        return this.$store.getters.contents.slice().reverse();
      }
    }
  },
}
</script>

<style scoped>
.history-display {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>