<template>
  <div class="top-nav">
    <span @click="goBack">&nbsp;&nbsp;< </span>{{title}}
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: [ 'title'],
  methods: {
    goBack: function(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-nav{
  height: 30px;
  background-color: lightskyblue;
  text-align: center;
  color: white;
  margin-top: -20px;
  padding: 5px;
}
span{
  float: left;
}
</style>
