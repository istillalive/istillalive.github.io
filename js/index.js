$(function(){
    // 初始化fullpage
    // 1、设置每一屏的背景颜色
    $("#fullpage").fullpage({
      // 配置参数
      sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
      //2、设置屏幕内容的对齐方式，默认垂直居中，改成顶部对齐
      verticalCentered: false,
      // 3、默认不显示导航 点容器  
      navigation: true,
      // 设置页面切换的时长  默认700ms
      scrollingSpeed: 1000,
      // 4、页面完全进入后的回调  监听页面进入某一屏
      afterLoad: function(anchorLink, index){
        $(index.item).addClass("now")
        $(".more").removeClass("leaved")
      },
      // 绑定点击事件要保证插件内容渲染完毕
      // 回调 afterRender 页面结构生成后的回调 即初始化完成
      afterRender: function(){
        // $.fn.fullpage.moveSectionDown()  调用fullpage插件的方法
        $(".more").on("click",function(){
          $.fn.fullpage.moveSectionDown()
        })
        // 监听第四屏的购物车动画结束之后，在执行收货地址的动画
        $(".screen04 .cart").on("transitionend", function(){
          $(".screen04 .text img").eq(0).hide()
          $(".screen04 .text img").eq(1).css({
            position: "static",
            opacity: 1,
            transition: "all 1s"
          })
          $(".screen04 .address").show().find("img:last").fadeIn(1000)
          
        })
      },
      onLeave:function(index, next, direction){
        $(".more").addClass("leaved")
        if(index.index === 1 && next.index === 2){
          // 从第二屏跳转第三屏时  给第二屏添加动画类 触发离开的动画
          $(index.item).addClass("leaved");
        }else if (index.index === 2 && next.index === 3) {
          // 从第三屏跳转第四屏时  给第三屏添加离开动画类 触发离开的动画
          $(index.item).addClass("leaved");
        } else if (index.index === 4 && next.index === 5) {
          // 从第五屏跳转第六屏时  给第五屏添加离开动画类 触发离开的动画
          $(index.item).addClass("leaved");
          // 第六屏的盒子 当第五屏离开时就触发动画
          $(".screen06 .box").addClass("show");
        }
      }
    })
})