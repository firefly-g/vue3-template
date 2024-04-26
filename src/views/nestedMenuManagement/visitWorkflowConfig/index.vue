<script setup>
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'
defineOptions({
    name: 'visitWorkflowConfig'
  });
const current = shallowRef(CompA)
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <transition :duration="500"  mode="out-in" name="fade-transform" >
      <keep-alive :include="['test']">
        <component :is="current"></component>
      </keep-alive>
    </transition>
  </div>
</template>
