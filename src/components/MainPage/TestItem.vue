<script setup></script>

<template>
  <div
    class="testitem"
    :class="{ selected: isSelected }"
    :style="{ borderColor: test.color }"
    @click="selectTest"
  >
    <div class="text">{{ test.title }}</div>
  </div>
</template>

<script>
export default {
  name: "TestItem",
  data() {
    return {
      isSelected: false,
    };
  },
  props: {
    test: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectTest() {
      // this.$emit("selectTest", this.test);
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style scoped>
.testitem {
  background-color: var(--background-color);
  filter: brightness(1.1);
  border-bottom: 1px solid #5e8aa7;
  border-radius: 0px 0px 15px 15px;
  color: var(--text-color);
  padding: 20px 0;
  width: 100%;
}
.selected {
  border: 1px solid #5e8aa7;
  border-radius: 15px;
  filter: brightness(2);
}
.testitem:hover {
  filter: brightness(1.5);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
}
.text {
  padding: 0 20px;
}
</style>
