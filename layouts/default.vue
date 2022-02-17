<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <Nuxt keep-alive />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/navigation-bar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
main {
  background-color: var(--main-color);
      padding: 1rem;
      border-radius: 1rem;
}
</style>
