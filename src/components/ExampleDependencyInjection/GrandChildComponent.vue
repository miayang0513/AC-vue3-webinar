<template>
  <p>Message from grandparent is: {{ msg }}</p>
  <p>Default Value is: {{ defaultValue }}</p>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'GrandChildComponent',
  setup () {
    const msg = inject('msg', 'default value')
    const defaultValue = inject('defaultValue', 'default value')

    return {
      msg,
      defaultValue
    }
  }
}
</script>
