<template>
  <div>
     <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img" class="swipe-img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <my-ul>
      <my-li>
        <router-link :to="{name: 'news.list'}">
          <div>
            <img src="../../assets/img/news.png" alt="新闻资讯">
          </div>
          <span>新闻资讯</span>
        </router-link>
      </my-li>
      <my-li>
        <router-link :to="{name: 'picture.list'}">
          <div>
            <img src="../../assets/img/picShow.png" alt="图文分享">
          </div>
          <span>图文分享</span>
        </router-link>
      </my-li>
      <my-li>
        <router-link :to="{name: 'product.list'}">
          <div>
            <img src="../../assets/img/prodShow.png" alt="商品展示">
          </div>
          <span>商品展示</span>
        </router-link>
      </my-li>
      <my-li>
        <div>
          <img src="../../assets/img/feedback.png" alt="商品展示">
        </div>
        <span>留言反馈</span>
      </my-li>
      <my-li>
        <div>
          <img src="../../assets/img/searchNews.png" alt="留言反馈">
        </div>
        <span>搜索资讯</span>
      </my-li>
      <my-li>
        <div>
          <img src="../../assets/img/connectUs.png" alt="联系我们">
        </div>
        <span>联系我们</span>
      </my-li>
    </my-ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs: [],
    };
  },
  // 在组件创建出来后，发起ajax请求，获得轮播图的数据
  created: function(){
      // console.log(this.imgs);
      let that = this;
      let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('GET','http://www.sinya.online/api/getlunbo',true);
      xhr.onreadystatechange = function(){
        console.log(xhr.status + ',' + xhr.readyState);
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
    });
    promise.then(function(value){
      that.imgs = JSON.parse(value).message;
      console.log(that.imgs);
      // console.log(value.message);
    }).catch(console.log);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 关于轮播图的样式 */
.swipe{
  height: 200px;
  margin-bottom: 20px;
  margin-top: -20px;
}
.swipe-img{
  width: 100%;
}
</style>
