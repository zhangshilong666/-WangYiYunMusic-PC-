<template>
	<div>
		<my-head></my-head>
			<div id="main">
				<router-view @musicInfo='MInfo'></router-view>
			</div>
		<my-foot :musicinfo='musicinfo'></my-foot>
	</div>
	
</template>

<script>
	import myHead from './components/top/index.vue'
	import myFoot from './components/bottom/index.vue'
	export default {
		data:function(){
			return{
				musicinfo:[]
			}
		},
		methods:{
			MInfo(msg){
				this.musicinfo = msg
			}
		},
		components:{
			myHead,
			myFoot
		}
	}
</script>
<style>
	
@import url("./assets/reset.css");
@import url("./assets/bofangliang/iconfont.css");
body,html{
	height: 100%;
	background-color: #F5F5F5;
}
#main{
	height: 100%;
	width: 100%;
	
}
</style>
