<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>

    <router-view class="tmpl"/>

    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../src/assets/img/home.png" @click="hashChange">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="../src/assets/img/member.png" @click="hashChange">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="../src/assets/img/shopcart.png" @click="hashChange">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../src/assets/img/search.png" @click="hashChange">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      selected: '',
    };
  },
  methods: {
    hashChange: function(){
      this.$nextTick(function(){
        this.$router.push({
          name: this.selected,
        });
      });
    }
  },
  // watch: {
  //   selected: function(newVal, oldVal){
  //     // console.log(newVal);
  //     this.$router.push({
  //       name: newVal,
  //     });
  //   }
  // }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
mt-header{
  margin-top: 0;
  width: 100%;
}
#footer{
  position: fixed;
  bottom: 0;
}
</style>
