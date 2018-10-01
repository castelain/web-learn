<template>
  <div>
    <nav-bar title="图文分享"></nav-bar>
    <div>
      <a v-for="imgCategory in imgCategoryList" :key="imgCategory.id" @click="getImgsByCategroyId(imgCategory.id)">
        {{ imgCategory.title }}
      </a>
      <ul>
        <li v-for="img in imgList" :key="img.id">
          <router-link :to="{name: 'picture.detail', query: {id: img.id}}">
            <img v-lazy="img['img_url']">
            <div>
              <p>
                {{ img['title'] }}
              </p>
              <p>
                {{ img['seo_description'] }}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureList',
  data () {
    return {
      imgCategoryList: [],
      imgList: [],
    }
  },
  methods: {
    // 获取图片目录列表
    getImgCategoryList: function(){
      let that = this;
      let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('GET','http://www.sinya.online/api/getimgcategory',true);
      xhr.onreadystatechange = function(){
        console.log(xhr.status + ',' + xhr.readyState);
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
      });
      promise.then(function(value){
        that.imgCategoryList = JSON.parse(value).message;
        // 手动添加一个类别“全部”
        that.imgCategoryList.unshift({"title":"全部","id":0});
        // console.log(that.imgCategoryList);
      }).catch(console.log);
    },

    // 根据目录id，获取目录下的图片
    getImgsByCategroyId: function(categroyId){
      let that = this;
      let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      let url = 'http://www.sinya.online/api/getimages/' + categroyId;
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function(){
        console.log(xhr.status + ',' + xhr.readyState);
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send();
      });
      promise.then(function(value){
        that.imgList = JSON.parse(value).message;
        // console.log(that.imgList);
        if(that.imgList.length === 0){
          // alert('这儿暂时没有图片了！');
          that.$toast({
            message: '这儿暂时没有图片了！',
            position: 'middle',
            iconClass: 'icon-404',
            duration: 3000
          });
        }
      }).catch(console.log);
    },
  },
  created() {
      // 获取所有的图片类别
      this.getImgCategoryList();
      // 获取所有的图片
      this.getImgsByCategroyId(0);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  margin-left: 10px;
  color: blueviolet;
}
a:visited{
  /* cursor: pointer; */
  text-decoration-color: aqua;
}
image[lazy=loading] {
  width: 180px;
  height: 300px;
  margin: 10px auto;
  left: 10px;
}
li{
    position: relative;
    left: -20px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.description{
  position: absolute;
  bottom: 0;
  left: 36px;
  background-color: rgba(100,100,100,.8);
  width: 300px;
  /* height: 100px; */
  color: white;
}
.icon-404{
  background-image: url('../../assets/img/404.png');
}
</style>
