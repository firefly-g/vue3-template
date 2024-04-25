<script setup>
import { ref } from 'vue'
const msg = ref('')
defineOptions({
    name: 'test'
  });
</script>

<template>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
</template>
