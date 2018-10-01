<template>
  <div>
    <nav-bar title="商品列表"></nav-bar>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul>
        <li v-for="item in goods" :key="item.id" class="card">
          <router-link :to="{name:'product.detail', query:{id: item.id}}">
            <img :src="item['img_url']" :alt="item['title']" style="width: 50px; height: 60px;">
            <div>{{ item.title }}</div>
            <div class="card-footer">
              <div>
                <span class="red">￥{{ item['sell_price'] }}</span>
                <span class="grey">￥{{ item['market_price'] }}</span>
              </div>
              <div>
                <span>热卖中</span>
                <span>剩余{{ item['stock_quantity'] }}件</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      goods: [],
      pageIndex: 1,
      allLoaded: false,
    }
  },
  methods: {
    loadBottom: function(){

    }
  },
  created() {
    let that = this;
    let promise = new Promise(function(fulfill, reject){
    let xhr = new XMLHttpRequest();
    let url = 'http://www.sinya.online/api/getgoods?pageindex=' + that.pageIndex;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
      console.log(xhr.status + ',' + xhr.readyState);
      if(xhr.status === 200 && xhr.readyState === 4){
        fulfill(xhr.responseText);
      }
    };
    xhr.send();
  });
  promise.then(function(value){
    that.goods = JSON.parse(value).message;
    }).catch(console.log);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin: 0 auto;
}
li{
  width: 45%;
  height: 45%;
  float: left;
  margin: 4px;
  padding: 6px;
  margin-left: -4px;
  border-radius: 4px;
}
.card{
  border: 1px solid lightblue;
}
.card > img{
  margin-top: 6px;
  margin-bottom: 6px;
}
.card-footer{
  background-color: rgba(0,0,0,.3);
  width: 100%;
}

</style>
