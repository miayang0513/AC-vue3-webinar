<style scoped>
header,
footer {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 30px;
  left: 0px;
  z-index: 10000;
}
header {
  top: 0px;
}

footer {
  bottom: 0px;
}
.main {
  position: relative;
  z-index: 9999;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.modal {
  position: fixed;
  z-index: 100000;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: end;
}
</style>

<template>
  <header>Header</header>
  <div class="main">
    <!-- original modal -->
    <button @click="toggleOrigin">open origin</button>
    <div v-if="isOpenOrigin" class="modal">
      <button @click="toggleOrigin">close</button>
    </div>

    <!-- teleport modal -->
    <button @click="toggleTeleport">open teleport</button>
    <teleport to="#app">
      <div v-if="isOpenTeleport" class="modal">
        <button @click="toggleTeleport">close</button>
      </div>
    </teleport>
  </div>
  <footer>Footer</footer>
</template>

<script setup>
import { ref } from 'vue'

const isOpenOrigin = ref(false)
const toggleOrigin = () => (isOpenOrigin.value = !isOpenOrigin.value)

const isOpenTeleport = ref(false)
const toggleTeleport = () => (isOpenTeleport.value = !isOpenTeleport.value)
</script>
