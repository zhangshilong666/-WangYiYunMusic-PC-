<template>
	<div class="gedan-body">
		<el-container>
		  <el-main>
			  <div class="head">
				  <span>全部</span>
				  <el-dropdown size="small" split-button type="primary" placement='bottom-top' trigger='click'>
				    选择分类
				    <el-dropdown-menu slot="dropdown"  >
				      <el-dropdown-item v-for='item in gedanClass'>{{item.name}}</el-dropdown-item>
				    </el-dropdown-menu>
				  </el-dropdown>
			  </div>
			  <div class="list">
				  <ul>
				  	<li v-for="item in List" :key='item.id'>
				  		<div class="ite">
				  			<img :src="item.coverImgUrl" alt="">
				  			<div class="play">
				  				<i class="iconfont icon-icon_headset"></i>
				  				<span>{{item.playCount}}</span>
				  				<i></i>
				  			</div>
				  		</div>
						<h1>{{item.name}}</h1>
				  		<p>{{item.creator.nickname}}</p>
				  	</li>
				  </ul>
			  </div>
		  </el-main>
		  <el-footer height="173px">
		  	<div class="center">
		  		<div class="left">
		  			<p>服务条款<span>|</span> 隐私政策<span>|</span> 儿童隐私政策<span>|</span> 版权投诉指引<span>|</span> 意见反馈 <span>|</span></br></p>
		  			
		  			<p>网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号</br>
		  			
		  			违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</br>
		  			
		  			粤B2-20090191-18工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</br></p>
		  		</div>
		  		<div class="right">
		  			<span>Amped Studio</span>
		  			<span>用户认证</span>
		  			<span>独立音乐人</span>
		  			<span>赞赏</span>
		  			<span>视频奖励</span>
		  		</div>
		  	</div>
		  </el-footer>
		</el-container>
	</div>
</template>
	
<script>
	export default{
		data:function(){
			return{
				List:[],
				gedanClass:[],
			}
		},
		//获取歌单
	
		mounted:function(){
			this.axios.get('http://localhost:3000/top/playlist').then(({data})=>{
				this.List = data.playlists
			})
			//歌单列表
			this.axios.get('http://localhost:3000/playlist/highquality/tags').then(({data})=>{
				this.gedanClass = data.tags
			})
		}
	}
	
	
</script>

<style lang="less" scoped>
	.gedan-body{
		.el-container{
			.el-main{
				padding: 40px;
				width: 980px;
				background-color: #fff;
				border-left: 1px solid #ccc;
				border-right: 1px solid #ccc;
				height: 1000px;
				margin: 0 auto;
				.head{
					height: 40px;
					border-bottom: 2px solid #C20C0C;
					span{
						&:nth-of-type(1){
							float: left;
							color: #000000;
							font-size: 23px;
							margin-right: 13px;
							margin-top: 5px;
						}
						&:nth-of-type(2){
							float: right;
							display: block;
							padding: 8px 10px;
							background-color: #C20C0C;
							border-radius: 3px;
							color: #fff;
						}
					}
				}
				.list{
					width: 100%;
					height: 1164px;
					box-sizing: border-box;
					ul{
						 overflow: hidden;
						 margin-left:-40px;
						 box-sizing: border-box;
						 padding: 10px 0px 0px 0px;
						 li{
							 height: 204px;
							 width: 140px;
							 padding: 20px 0px 0px 42px;
							 float: left;
							 .ite{
								 width:100%;
								 height: 140px;
								 background-image: url(../../../assets/coverall.png);
								 background-position: 0px 0px;
								 position: relative;
								 img{
									 width: 100%;
									 height: 100%;
								 }
								 .play{
									 width: 100%;
									 position: absolute;
									 height: 27px;
									 bottom: 0px;
									 background-image: url(../../../assets/coverall.png);
									 background-position: 0px -537px;
									 background-color: rgba(0,0,0,0);
									 color: #ccc;
									 line-height: 27px;
									 display: flex;
									 flex-flow: column wrap;
									 i{
										 color: #ccc;
										 width: 27px;
										 height: 27px;
										 display: block;
										 text-align: center;
										 
									 }
									 i:nth-of-type(2){
										align-self: flex-end;
										background-image: url(../../../assets/iconall.png);
										background-position: 6px 5px;
										&:hover{
											background-position: 6px -55px;
										}
									}
								 }
							 }
							 h1{
								 font-size: 13px;
								 color: #000;
								 text-overflow: ellipsis;
								 overflow: hidden;
								 white-space: nowrap;
								 margin-top: 10px;
							 }
							 p{
								 text-overflow: ellipsis;
								 overflow: hidden;
								 white-space: nowrap;
								 padding: 10px 0px;
								 font-size: 10px;
								 color: #666;
							 }
						 }
					}
				}
			}
			.el-footer {
				   border: 1px solid #ccc;
					color: #333;
					text-align: center;
					height: 137px;
					background-color: #F2F2F2;
					.center{
						width: 980px;
						height: 100%;
						overflow: hidden;
						margin: 0 auto;
						.left{
							float: left;
							width: 50%;
							height: 100%;
							line-height: 30px;
							text-align: left;
							span{
								padding: 0px 10px;
								
							}
							p{
								&:nth-of-type(1){
									color: #888;
								}
							}
						}
						.right{
							float: right;
							width: 50%;
							height: 100%;
							span{
								display: block;
								float: left;
								margin: 30px 0px 0px 30px;
								display: flex;
								flex-flow: column nowrap;
								align-items: center;
								&:before{
									width: 50px;
									height: 45px;
									content: "";
									display: block;
									background-image: url(../../../assets/foot_enter_new.png);
									margin-bottom: 10px;
									background-repeat: no-repeat;
								}
								&:nth-of-type(1):before{
									background-position: -60px -450px;
								}
								&:nth-of-type(2):before{
									background-position: -57px -100px;
								}
								&:nth-of-type(3):before{
									
								}
								&:nth-of-type(4):before{
									background-position: -57px -50px;
								}
								&:nth-of-type(5):before{
									background-position: 2px -100px;
								}
							}
						}
					}
				 }
			}
	
		}
		
	 
	 
</style>
