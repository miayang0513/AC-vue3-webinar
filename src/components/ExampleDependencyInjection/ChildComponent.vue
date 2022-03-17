<template>
  <grand-child-component />
</template>

<script>
import GrandChildComponent from '@/components/ExampleDependencyInjection/GrandChildComponent.vue'

export default {
  name: 'ChildComponent',
  components: {
    GrandChildComponent
  }
}
</script>
