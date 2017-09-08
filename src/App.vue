<script>
require('@/services/themeService').loadStyle();

export default {
  name: 'app'
}
</script>

<template>
  <div id="app">
    
    <main class="container">
      <router-view></router-view>
    </main>

  </div>
</template>