<template>
	<div>
			<div class="nav">
				<ul>
					<router-link :to="{name:'tuijian'}" class="nav-link">推荐</router-link>
					<router-link :to="{path:'/faxian/paihang',query:{id:19723756}}"  class="nav-link">排行榜</router-link>
					<router-link to="/faxian/gedan" class="nav-link">歌单</router-link>
					<router-link to="/faxian/diantai" class="nav-link">主播电台</router-link>
					<router-link to="/faxian/geshou" class="nav-link">歌手</router-link>
					<router-link to="/faxian/xindie" class="nav-link">新碟上架</router-link>
				</ul>
			</div>
			<router-view v-on:changeUrl='chengeMusicUrl' @getMusicInfo='setMusicInfo'></router-view>
	</div>	
</template>

<script>
	export default{
		data:function(){
			return{
				
			}
		},
		methods:{
			chengeMusicUrl(u){
				this.a.src = u;
				this.a.play()
			},
			setMusicInfo(msg){
				this.$emit('musicInfo',msg)
			}
		},
	}
</script>
<style lang="less">
	@import "../../assets/bofangliang/iconfont.css";
	.nav{
		width: 100%;
		height: 34px;
		background-color: #C20C0C;
		ul{
			width: 1100px;
			box-sizing: border-box;
			height: 100%;
			margin: 0 auto;
			overflow: hidden;
			padding-left: 200px;
			.nav-link{
				text-decoration: none;
				float: left;
				height: 24px;
				margin: 5px 15px;
				padding: 0 10px;
				line-height: 24px;
				color: #FFFFFF;
				box-sizing: border-box;
				
			}
			.router-link-active{
					background-color: #9B0909;
					border-radius: 34px;
				}
		}
	}
	
	 
	
</style>
