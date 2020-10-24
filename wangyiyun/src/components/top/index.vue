<template>
	<header>
		<div class="conter">
			<h1></h1>
			<ul>
				<li><router-link to="/faxian">发现音乐</router-link></li>
				
				<li><router-link to="/my">我的音乐</router-link></li>
				
				<li>朋友</li>
				<li>商城</li>
				<li>音乐人</li>
				<li>下载客户端</li>
			</ul>
			<div class="right">
				<router-link to="/login">登录</router-link>
				<router-link to="">创作者中心</router-link>
				<div class="sousuo">
					<i></i>
					<input type="text" placeholder="音乐/视频/电台/用户">
				</div>
			</div>
		</div>
		
	</header>
	
</template>

<script>
	
</script>

<style lang="less">
	
	header{
		width: 100%;
		height: 70px;
		background-color: #242424;
	}
	header .conter{
		height: 100%;
		width: 1100px;
		margin:0 auto;
	}
	header .conter h1{
		float: left;
		display: block;
		width: 176px;
		height: 100%;
		padding-right: 20px;
		background-image: url(../../assets/topbar.png);
		background-position: 10px 0px;
		background-repeat: no-repeat;
	}
	header .conter ul{
		overflow: hidden;
		height: 100%;
		float: left;
	}
	header .conter ul li{
		line-height: 70px;
		padding: 0px 20px 0px 20px;
		float: left;
		color:#ccc;
		a{
			color: #ccc;
			text-decoration: none;
			width: 100%;
			height: 100%;
			display: block;
			position: relative;
			&::before{
				border: 6px solid #C20C0C;
				border-color: transparent transparent #C20C0C transparent;
				position: absolute;
				bottom: 0;
				left: 50%;
				margin-left: -3px;
				content: "";
				display: none;
			}
				
		}
		.router-link-active{
			&::before{
				display: block;
			}
		}
		
	}
	header .conter .right{
		overflow: hidden;
		float: right;
		height: 100%;
	}
	header .conter .right .sousuo{
		width: 158px;
		height: 32px;
		margin-top: 19px;
		border-radius: 32px;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 7px;
		float: right;
	}
	header .conter .right .sousuo input{
		width: 120px;
		float: right;
		display: block;
		border: 0px;
		box-sizing: border-box;
		height: 18px;
	}
	header .conter .right .sousuo::before{
		width: 18px;
		height: 18px;
		display: block;
		content: "";
		background-image: url(../../assets/topbar.png);
		float: left;
		background-position: -5px -106px;
	}
	header .conter .right a:nth-of-type(2){
		margin-top:19px;
		padding: 9px;
		box-sizing: border-box;
		border: 1px solid #666666;
		display: block;
		float: right;
		margin-left: 20px;
		border-radius: 18px;
		text-decoration: none;
		color: #CCCCCC;
	}
	header .conter .right a:nth-of-type(1){
		line-height: 70px;
		display: block;
		float: right;
		color: #aaa;
		text-decoration: none;
		margin-left: 20px;
	}
</style>
