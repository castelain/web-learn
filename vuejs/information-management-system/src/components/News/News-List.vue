<template>
  <div>
    <nav-bar title="新闻列表"></nav-bar>
    <ul>
      <li v-for="item in newslist" :key="item.id">
        <router-link :to="{name: 'news.detail', params:{id:item.id}}">
          <img :src="item['img_url']" :alt="item.title">
          <p>{{ item.title }}</p>
          <div>
            <span>点击数:{{ item[ "click" ] }}</span>
            <span>新闻时间：{{ item[ "add_time" ] | formatTime('YYYY-MM-DD') }}</span>
          </div>
        </router-link>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      newslist: [],
    }
  },
  // 在组件创建之后，获取新闻列表数据
    created: function(){
      // console.log(this.imgs);
      let that = this;
      let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('GET','http://www.sinya.online/api/getnewslist',true);
      xhr.onreadystatechange = function(){
        console.log(xhr.status + ',' + xhr.readyState);
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
    });
    promise.then(function(value){
      that.newslist = JSON.parse(value).message;
      console.log(that.newslist);
    }).catch(console.log);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  float: left;
  width: 80px;
}
li{
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: -20px;
}
p{
  margin-left: 20px;
  color: lightseagreen;
}
span{
  margin-left: 20px;
}
</style>
