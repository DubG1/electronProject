<template>
    <div class="main-container">
      <!-- Add your main container content here -->
      <slot></slot>
    </div>
  </template>
  
<script lang="ts">
  export default {
    name: 'MainContainer',
  };
</script>
  
<style scoped>
.main-container {
    background-color: white;
  }
</style>