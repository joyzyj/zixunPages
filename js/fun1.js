window.onload = function()
{
    var height=document.documentElement.clientHeight;
    document.getElementById("back").style.height = height + "px";
}

var app = new Vue({
    el: '#app',
    data: {
      options:[
        {text:'单击此处选择资讯类型',value:0},
        {text:'校园新闻',value:1},
        {text:'学术动态',value:2},
        {text:'图片新闻',value:3},
        {text:'每周会议',value:4},
        {text:'学生社区',value:5},
      ],
      selected:0
    }
});
  