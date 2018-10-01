<template>
  <li>
    <!-- <div>
      <slot name="icon"></slot>
    </div>
    <slot name="title"></slot> -->
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'My-Li',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style: none;
  width: 33.3%;
  height: 100px;
  float: left;
}
</style>
