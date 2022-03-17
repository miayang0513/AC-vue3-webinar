<template>
  <div ref="rootElement">This is root</div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  name: 'ExampleLifecycle',
  setup () {
    const rootElement = ref(null)

    console.log('setup', rootElement.value)

    onBeforeMount(() => {
      console.log('onBeforeMount', rootElement.value)
    })

    onMounted(() => {
      console.log('onMounted', rootElement.value)
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return {
      rootElement
    }
  }
}
</script>
