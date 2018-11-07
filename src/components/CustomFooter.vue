<template>
<div id="footer" style="margin-top:100px">
  <el-button  v-on:click="to">Layout页面</el-button>
  <el-button  @click="go">Container</el-button>
  <el-button  @click="showAnimation">展示动画列表</el-button>
</div>
</template>
    


<script>
export default {
    name:"customfooter",
    methods: {
    go:function() {
      this.$router.push("/container");
     this.$emit("updateView",false)
    },
      showAnimation(){
    this.$emit("updateView",true)
  },
  to:function(){
     this.$router.push("/layout");
     this.$emit("updateView",false)
  }
  }

};
</script>

<style>
</style>
