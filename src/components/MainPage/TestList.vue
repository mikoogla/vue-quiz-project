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
      <TestItem :test="test" v-for="test in tests" />
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
.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 4rem 0;
}
@media (max-width: 768px) {
}
</style>
