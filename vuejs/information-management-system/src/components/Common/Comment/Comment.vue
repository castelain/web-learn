<template>
  <div>
    <hr>
    <div>
      <span class="left"><strong>提交评论</strong></span>
      <span class="right"><strong>返回</strong></span>
    </div>
    <textarea name="comment" id="comment" cols="48" rows="5" v-model="newComment"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div>
      <span class="left"><strong>评论列表</strong></span>
      <span class="right"><strong>44条评论</strong></span>
    </div>
    <hr>
    <ul>
      <li v-for="(comment,index) in comments" :key="index" class="comment">
        <span>{{ comment['user_name'] }}:</span>
        <span>{{ comment['content'] }}</span>
        <span class="time">{{ comment['add_time'] | beforeTime }}</span>
        <hr>
      </li>
    </ul>
    <hr>
    <mt-button type="danger" size="large" plain @click="loadMore(pageId)">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      comments: [],
      pageId: 1,
      newComment: ''
    }
  },
  methods: {
    loadMore: function(pageIndex){
    let that = this;
    let promise = new Promise(function(fulfill, reject){
      let xhr = new XMLHttpRequest();
      // 调用这个函数，如果传递了参数，则用传递进来的参数作为评论页码；否则，默认获取第一页的评论
      that.pageId = pageIndex || 1;
      let url = 'http://www.sinya.online/api/getcomments/' + that.$route.query.id + '?pageindex=' + that.pageId;
      xhr.open('GET',url,true);
      that.pageId ++;
      xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4){
          fulfill(xhr.responseText);
        }
      };
      xhr.send(null);
    });
    promise.then(function(value){
      let newComments = JSON.parse(value).message;
      if(newComments.length === 0){
        that.$toast('没有更多评论了哦！');
      }else{
        that.comments = that.comments.concat(newComments);
      }
    }).catch(console.log);
    },
    // 添加评论
    addComment: function(){
      let that = this;
      let promise = new Promise(function(fulfill, reject){
        let xhr = new XMLHttpRequest();
        let url = 'http://www.sinya.online/api/postcomment/' + that.$route.query.id;
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function(){
          if(xhr.status === 200 && xhr.readyState === 4){
            fulfill(xhr.responseText);
          }
        };
        xhr.send('content=' + that.newComment);
      });
      promise.then(function(value){
        if(JSON.parse(value).status === 0){
          that.newComment = '';
          that.$toast('评论提交成功啦！');
          that.comments = [];
          that.loadMore();
        }
      }).catch(console.log);
    },
  },
  created() {
    this.loadMore();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea{
  width: 98%;
  margin: 10px auto;
  border: 1px solid lightgreen;
}
li{
  text-align: left;
  margin-left: -26px;
}
.left{
  float: left;
}
.right{
  float: right;
}
hr{
  clear: both;
  margin-top: 10px;
}
.comment span{
  margin-right: 10px;
}
.time{
  float: right;
}
</style>
