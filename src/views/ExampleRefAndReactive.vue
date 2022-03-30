<template>
  <div>
    <div>
      <button @click="refIncrement">Button Ref</button>
      <p>{{ count }}</p>
    </div>
    <div>
      <button @click="reactiveIncrement">Button Reactive</button>
      <p>{{ state.count }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'ExampleRefAndReactive',
  setup () {
    const count = ref(0)
    const state = reactive({ count: 0 })

    const refIncrement = () => {
      count.value++
    }

    const reactiveIncrement = () => {
      state.count++
    }

    return {
      count,
      state,
      refIncrement,
      reactiveIncrement
    }
  }
}
</script>
