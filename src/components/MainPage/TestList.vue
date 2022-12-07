<script setup>
import { mapGetters, mapActions } from "vuex";
import Input from "../../UI/Input.vue";
import TestItem from "./TestItem.vue";
import Button from "../../UI/Button.vue";
</script>
<template>
  <div class="testList">
    <div class="searchBar">
      <Input type="text" placeholder="Search" id="input-style" />
    </div>
    <div class="list"><h2>Available tests</h2></div>

    <div class="items">
      <TestItem v-for="test in tests">{{ test.title }}</TestItem>
    </div>
    <Button @click="importTests">import Tests</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
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
Button {
  background-color: var(--accent-color);
  color: var(--background-color);
}
.testList {
  background-color: var(--background-color);
  padding: 20px;
  height: 100%;
}
.searchBar {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 20px 0;
}
.items {
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}
@media (max-width: 768px) {
  .testList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .searchBar {
    justify-content: center;
    align-items: center;
  }
}
</style>
