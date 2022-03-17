<template>
  <div>
    <div>
      <span>First Name &nbsp;</span>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <span>Last Name &nbsp;</span>
      <input type="text" v-model="lastName" />
    </div>
    <p>Full name: {{ fullName }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ExampleRefAndReactive',
  setup () {
    const firstName = ref('')
    const lastName = ref('')

    const fullName = computed(() => firstName.value + lastName.value)

    return {
      firstName,
      lastName,
      fullName
    }
  }
}
</script>
