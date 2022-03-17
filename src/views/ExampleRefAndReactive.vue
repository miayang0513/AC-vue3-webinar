<template>
  <div>
    <div>
      <Button @click="refIncrement">Button Ref</Button>
      <p>{{ count }}</p>
    </div>
    <div>
      <Button @click="reactiveIncrement">Button Reactive</Button>
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
