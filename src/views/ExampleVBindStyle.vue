<template>
  <p>Hello World</p>
  <div v-for="item in colorList" :key="item.name">
    <input type="radio" v-model="color" :value="item.color" :id="item.name" />
    <label :for="item.name">{{ item.name }}: {{ item.color }}</label>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colorList = [
  {
    name: 'Red',
    color: '#F07178'
  },
  {
    name: 'Blue',
    color: '#89DDFF'
  }
]

const color = ref(colorList[0].color)
</script>

<style scoped>
p {
  font-size: 40px;
  color: v-bind("color");
}
</style>
