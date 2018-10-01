<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>
    <div>
      <h3>{{ imgInfo.title }}</h3>
      <span>发起日期：{{ imgInfo['add_time'] | formatTime('YYYY-MM-DD') }}</span>
      <span>{{ imgInfo.click }}&nbsp;次浏览</span>
      <span>分类:民生经济</span>
    </div>
    <vue-preview :slides="imgs"></vue-preview>
    <div v-html="imgInfo.content"></div>
    <comment></comment>
  </div>
</template>

<script>
export default {
  name: 'PictureDetail',
  data () {
    return {
      imgInfo: {},
      imgs: [],
    }
  },
  created() {
    let that = this;
    let promise1 = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      let url = 'http://www.sinya.online/api/getimageInfo/' + that.$route.query.id;
      xhr.open('GET',url,true);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
    });
    promise1.then(function(value){
      that.imgInfo = JSON.parse(value).message[0];
    }).catch(console.log);
    let promise2 = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      let url = 'http://www.sinya.online/api/getthumimages/' + that.$route.query.id;
      xhr.open('GET',url,true);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
    });
    promise2.then(function(value){
      that.imgs = JSON.parse(value).message;
      that.imgs.forEach(img => {
        img.msrc = img.src;
        img.w = 600;
        img.h = 400;
      });
    }).catch(console.log);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color: blueviolet;
}
span{
  margin-right: 8px;
}
</style>
