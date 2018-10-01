
<template>
  <div>
    <nav-bar title="新闻详情"></nav-bar>
    <h4>{{ news.title }}</h4>
    <div class="content">
      <span>{{ news.click }}次点击</span>
      <span>分类:民生经济</span>
      <span>添加时间：{{ news["add_time"]| formatTime('YYYY-MM-DD') }}</span>
      <hr>
      <div v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data () {
    return {
      news: {}
    }
  },
  created() {
    var that = this;
    let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      let url = 'http://www.sinya.online/api/getnew/' + that.$route.params.id;
      console.log(that.$route.params.id);
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
    });
    promise.then(function(value){
      that.news = JSON.parse(value).message[0];
      console.log(that.news);
    }).catch(console.log);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin-left: 10px;
  margin-right: 10px;
}
h4{
  color: rgb(110, 110, 201);
}
</style>
