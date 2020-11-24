<template>
  <div class="grid" id="box" >
  <div class="grid3">
  
		<img alt="Vue logo" src="./../assets/logo.png">
		
		<ul>
		
		<h1>基本資料</h1>
			<h5>姓名：高震育</h5>
			<h5>希望求職地點 : 台北/新北</h5>
			<h5>大學科系 : 台北大學資訊工程系</h5>
			<h5>研究所科系 : 台灣大學醫學工程所醫學資訊組</h5>
			<h5>E-mail : ae6013@gmail.com</h5>
			<h5>手機 : 0932450984</h5>
		
		</ul>
   </div>
   
   
   <div class="grid3">
		<h1>能力縱述</h1>
		<ul>
			<h5>三年開發軟體前後端經驗</h5>
			<h5>熟悉 JAVA 相關技能 - Spring-boot ， Spring MVC ， Javascript ， XML ， JSON ， Freemaker ， Restful API ， Web Service相關技能</h5>
			<h5>熟悉 node.js 語言</h5>
			<h5>熟悉 UML系統分析開發工具</h5>
			<h5>熟悉 Windows 與 Linux 系統管理及維護</h5>
			<h5>熟悉 Tomcat 安裝設定及維護</h5>
			<h5>熟悉 MySQL 與 NoSQL(Redis 與 Mongo DB) 安裝，操作與維護</h5>
			<h5> 工作態度積極，學習快速，能夠有良好溝通與互動</h5>
			<h5> 可獨立開發或是團隊專案開發合作</h5>
			<h5> 有 OCPJP 與 AZ-900 證照</h5>
		</ul>
  
   </div>
	<div class="grid3">
		<h1>工作經歷</h1>
		<ul>
			<h5>台灣大哥大 MyMusic - 資深工程師 2016/11 - NOW </h5>
		</ul>
	</div>
	<div class="grid3">
		<h1>專案經歷</h1>
		<ul>
			<h5>MyMusic 大小網與電腦版網頁維護</h5>
			<h5>MyMusic 功能新增 - 影音專區 </h5>						
			<h5>MyMusic 研究 - 語音辨識比較</h5>
			<h5>MyMusic 研究 - 播歌機器人模擬 + 語音操控google home播歌模擬</h5>
			<h5>MyMusic 合作 - Line_today RSS feed xml 產生</h5>
			<h5>MyMusic 專案 - DB Cluster 轉置</h5>
			<h5>MyMusic 功能新增 - 分享與個人化</h5>
			<h5>MyMusic 合作專案 - 極速領域</h5>
			<h5>MyMusic 合作專案 - garmin 手錶</h5>
			<h5>MyMusic 合作專案 - google home nest mini</h5>
		</ul>		
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="test2" >點擊觀看詳細經歷</button>
		
	</div>
	
    

  </div>

	

</template>

<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'/>;

<script>

import scrollReveal from 'scrollreveal';


export default {
  name: 'HelloWorld',
  data () {
	return {
		scrollReveal: scrollReveal(),
		boxshow:false,
		login: {
            backgroundImage:"url(" + require("./../assets/back.jpg") + ")"
        }
	}
	
  },
  props: {
    msg: String,
	name : String ,
	location : String ,
	system : String ,
	e_mail : String ,
	phone : String ,
  },
  
  mounted() {
  this.scrollReveal.reveal('.grid3', {
    // 動畫時長
    duration: 2000, 
 
    // 延遲時間
    delay: 100,
    origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: true,
    // 在移动端是否使用动画
    mobile: true,
	viewFactor: 0.2,
	useDelay: "always",
	container: window.document.documentElement,
    // 滚动的距离，单位可以用%，rem等
    distance: '100px',
    // 其他可用的动画效果
    opacity: 0.001,
    easing: 'linear',
    scale: 0.9,
  });
 },
 methods: { 
	
		getMeal() {} ,
		test(){this.$router.push({ name: 'HelloWorld'})},
		test2(){
					this.$router.push({ name: 'Experience'})
					navtop.scrollIntoView();
				},
		goTop(){
				navtop.scrollIntoView();
				}
	
	},
	
	

}




</script>


<style>
	.grid3 {
			/* 排版用，不影響功能*/
			
			margin: 10px;
			background-color: rgba(0,191,255,0.4);
			font-size: 50px;
			line-height: 300px;
			text-align: left;
			
	}
	
	.grid3 h1{
			color:black;
			font-family:DFKai-sb;
	}
	
	.grid3 h5{
			color:black;
			font-family:DFKai-sb;
	}
	
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

