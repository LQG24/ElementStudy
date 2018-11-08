<template>
    <div id="char" >
        <div id = "main" style="width:600px;height:400px;"></div>
        <div id = "pie-chat" style="width:600px;height:400px;"></div>
    </div>
</template>
 <script src="echarts.min.js"></script>
<script>
export default {
  name: "char",
  mounted() {
    this.init();
    this.pie_chat();
  },
  methods: {
    init() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      /*    myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",//line为折线图，scatter为散点图
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }); */
      var option = {
        title: {
          text: "微信粉丝",
          subtext: "数量(个)"
        },
        tooltip: {
          trigger: "axis"
        },

        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ["stack", "tiled"] },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "20181102",
            "20181103",
            "20181104",
            "20181105",
            "20181106",
            "20181107",
            "201811008"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "粉丝增长",
            type: "line",
            smooth: true,
            data: [10, 12, 21, 54, 260, 830, 710]
          },
          {
            name: "用户增长",
            type: "line",
            smooth: true,
            data: [30, 182, 434, 791, 390, 30, 10]
          },
          {
            name: "粉丝总量",
            type: "line",
            smooth: true,
            data: [1320, 1132, 601, 234, 120, 90, 20]
          },
          {
            name: "用户总量",
            type: "line",
            smooth: true,
            data: [100, 200, 300, 400, 500, 600, 800]
          }
        ],
        legend: {
          data: ["粉丝增长", "用户增长", "粉丝总量", "用户总量"]
        }
      };
      myChart.setOption(option);
    },
    pie_chat() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("pie-chat"));
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
    }
  }
};
</script>