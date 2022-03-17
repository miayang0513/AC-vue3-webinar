<template>
  <div>
    <input type="text" v-model="msg" />
    <child-component/>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import ChildComponent from '@/components/ExampleDependencyInjection/ChildComponent.vue'

export default {
  name: 'ExampleDependencyInjection',
  components: {
    ChildComponent
  },
  setup () {
    const msg = ref('Hello World!!!')
    provide('msg', msg)

    return {
      msg
    }
  }
}
</script>
