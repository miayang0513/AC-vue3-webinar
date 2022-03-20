<template>
  <h1>{{ title }}</h1>
  <button @click="increment">{{ count }}</button>
  <my-component/>
</template>

<script setup>
import MyComponent from './MyComponent.vue'
import { ref, defineProps, defineEmits } from 'vue'

const title = ref('Hello World!')

const props = defineProps({
  count: Number
})

console.log(props.count)

const emit = defineEmits(['increment'])

const increment = () => {
  emit('increment')
}
</script>

