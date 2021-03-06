import { ref, onMounted, onUnmounted } from 'vue'

export default function useMouseTracker () {
  const x = ref(0)
  const y = ref(0)

  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return {
    x,
    y
  }
}
