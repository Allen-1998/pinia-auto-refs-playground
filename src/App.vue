<script setup lang="ts">
// without
// import useTestStore from '@/store/test';

// const testStore = useTestStore();
// const { name, fullName } = storeToRefs(testStore);
// const { updateName } = testStore;

// with
const { name, fullName, updateName } = useStore('test');
</script>

<template>
  <div>name:{{ name }}</div>
  <div>fullName:{{ fullName }}</div>
  <div @click="updateName">updateName</div>
</template>

<style scoped></style>
