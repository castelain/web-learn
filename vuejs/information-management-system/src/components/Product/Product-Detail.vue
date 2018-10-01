<template>
  <div>
    <nav-bar title="商品详情"></nav-bar>
    <div>
      这是一个轮播图
    </div>
    <h3>商品标题</h3>
    <hr>
   <div>
      <span>市场价：<span class="red">￥9999</span></span>
      <span>销售价：<span class="grey">￥5</span></span>
   </div>
   <div>
     <mt-field label="购买数量：" placeholder="请输入数字" type="number"></mt-field>
   </div>
   <div>
    <mt-button type="primary" size="normal">立即购买</mt-button>
    <mt-button type="danger" size="normal">加入购物车</mt-button>
   </div>
   <hr>
   <div class="detail">
     <p>商品参数</p>
     <p>商品货号：123456789</p>
     <p>库存情况：999件</p>
     <p>上架时间：2018-9-4</p>
   </div>
   <hr>
   <mt-button plain type="primary" size="large">图文介绍</mt-button>
   <mt-button plain type="danger" size="large">商品评论</mt-button>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
mt-button{
  margin: 0 auto;
}
.detail{
  text-align: left;
  margin-left: 4px;
  border: 1px solid lightcyan;
  padding: 6px;
}
</style>
