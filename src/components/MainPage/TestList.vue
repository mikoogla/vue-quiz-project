<script setup>
import { mapGetters, mapActions } from "vuex";
import Input from "../../UI/Input.vue";
import TestItem from "./TestItem.vue";
import Button from "../../UI/Button.vue";
</script>
<template>
  <div class="testList">
    <div class="searchBar">
      <Input
        type="text"
        placeholder="Search"
        id="input-style"
        v-model="searchQuery"
        @input="searchQuery = $event.target.value"
      />
    </div>
    <div class="list">
      <h2 v-if="filteredTests.length !== 0 && searchQuery">Results</h2>
      <h2 v-else-if="filteredTests.length !== 0">All tests</h2>
      <h2 v-if="filteredTests.length === 0">No results</h2>
    </div>

    <div class="items">
      <TestItem :test="test" v-for="test in filteredTests" />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.importTests();
  },
  data() {
    return {
      search: "",
      searchQuery: "",
    };
  },
  computed: {
    ...mapGetters("testsModule", {
      tests: "getTests",
    }),
    filteredTests() {
      if (!this.searchQuery || this.searchQuery === "") {
        return this.tests;
      }
      return this.tests.filter((test) => {
        return test.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions("testsModule", {
      importTests: "importTests",
    }),
  },
};
</script>
<style scoped>
Button {
  background-color: var(--accent-color);
  color: var(--background-color);
}
.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 4rem 0;
}
.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
@media (max-width: 768px) {
}
</style>
