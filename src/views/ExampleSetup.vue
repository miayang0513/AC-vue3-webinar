<template>
  <h1>{{ title }}</h1>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    count: Number
  },
  emits: ['increment'],
  setup (props, context) {
    // Accessing Props
    console.log(props.count)

    // Composition API
    const title = ref('Hello World!')

    const increment = () => {
      context.emit('increment')
    }

    return {
      title,
      increment
    }
  }
}
</script>

<!-- Option API -->

<!-- <template>
  <h1>{{ title }}</h1>
  <button @click="increment">{{ count }}</button>
</template>

<script>
export default {
  props: {
    count: Number
  },
  data() {
    return {
      title: 'Hello World!'
    }
  },
  methods: {
    increment() {
      this.$emit('increment')
    }
  }
}
</script> -->

