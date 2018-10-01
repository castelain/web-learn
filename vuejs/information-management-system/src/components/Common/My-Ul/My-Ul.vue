<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'My-Ul',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin: 0 auto;
  padding: 0;
}
</style>
