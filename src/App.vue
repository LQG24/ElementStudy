<template>
  <div id="app">
    <div>
      <el-button @click="show =!show">fade淡入淡出</el-button>
      <div style="display:flex;margin-top:20px;height:100px;">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>

      <el-button @click="showSecond=!showSecond" style="margin-top:20px">zoom缩放</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="showSecond" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="showSecond" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="showSecond" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  

   <div>
    <el-button @click="showThird = !showThird" style="margin-top:20px">collapse展开折叠</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="showThird">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
   </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      show: true,
      showSecond: true,
      showThird: true
    };
  }
};
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  /*  border-box 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制 */
  margin-right: 20px;
}
</style>
