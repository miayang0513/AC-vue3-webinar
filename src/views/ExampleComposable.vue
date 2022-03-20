<template>
  <p>Mouse position is at: {{ x1 }}, {{ y1 }}</p>
  <p>Mouse position is at: {{ x2 }}, {{ y2 }}</p>
</template>

<script>
import useMouseTracker from '@/composables/useMouseTracker'

export default {
  name: 'ExampleComposable',
  setup () {
    const { x: x1, y: y1 } = useMouseTracker()
    const { x: x2, y: y2 } = useMouseTracker()

    return {
      x1,
      y1,
      x2,
      y2
    }
  }
}
</script>
