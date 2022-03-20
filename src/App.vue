<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
}

main {
  padding: 30px;
}

nav {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 30px;
  border-right: 1px solid black;
}

nav a {
  text-align: left;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <nav>
    <router-link
      v-for="(link, index) in links"
      :key="link.name"
      :to="link.path"
    >{{ index + 1 }}. {{ link.name }}</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup () {
    const links = reactive([
      {
        name: 'Ref & Reactive',
        path: '/'
      },
      {
        name: 'Computed',
        path: 'example-computed'
      },
      {
        name: 'Lifecycle',
        path: 'example-lifecycle'
      },
      {
        name: 'Dependency Injection',
        path: 'example-dependency-injection'
      },
      {
        name: 'Composable',
        path: 'example-composable'
      }
    ])

    return {
      links
    }
  }
}
</script>
