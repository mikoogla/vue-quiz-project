<script setup>
import { mapGetters, mapActions } from "vuex";
</script>
<template>
  <div class="testList">
    <div class="searchBar">
      <input type="text" placeholder="Search" />
    </div>
    <div class="list">List of tests here</div>
    <button @click="importTests">Get Tests</button>
    <div v-for="test in tests" class="items">T: {{ test.title }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    ...mapGetters("testsModule", {
      tests: "getTests",
    }),
  },
  methods: {
    ...mapActions("testsModule", {
      importTests: "importTests",
    }),
  },
};
</script>
<style scoped>
.testList {
  background-color: #462929;
  padding: 20px;
  height: 100%;
}
</style>
