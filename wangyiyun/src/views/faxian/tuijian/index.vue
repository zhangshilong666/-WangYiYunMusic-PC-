<template>
	<div class="tuijian-body">
		<div class="banner">
			<div class="conter">
				<el-carousel height="285px">
					<el-carousel-item v-for="item in banners">
					  <img :src="item.imageUrl" alt="">
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<el-container>
			<el-container>
				<el-main>
					<div class="hot">
						<div class="hot-nav">
							<a href="">热门推荐</a>
							<div class="hot-nav-choose">
								<a href="">华语</a>
								<span>|</span>
								<a href="">流行</a>
								<span>|</span>
								<a href="">摇滚</a>
								<span>|</span>
								<a href="">民谣</a>
								<span>|</span>
								<a href="">电子</a>
							</div>
						</div>
						<ul>
							<li v-for="item in hotList" :key="item.id">
								<div class="hot-item">
									<img :src="item.picUrl" alt="">
									<div class="play">
										<i class="iconfont icon-icon_headset"></i>
										<span>{{item.playCount}}万</span>
										<i></i>
									</div>
								</div>
								<p>
									{{item.name}}
								</p>
							</li>
						</ul>
					</div>
					<div class="new">
						<div class="new-nav">
							<a href="">新碟上架</a>
						</div>
						<el-carousel trigger="click" height="150px" :autoplay="false">
							  <el-carousel-item v-for="item in 2" :key="item">
								<div class="new-item" v-for="item in newList" :key="item.id">
									<div>
										<i></i>
										<img :src="item.picUrl" alt="">
									</div>
									<p>{{item.name}}</p>
									<p>22131</p>
								</div>
							  </el-carousel-item>
						</el-carousel>
					</div>
					<div class="bangdan">
						<div class="bangdan-nav">
							<a href="">榜单</a>
						</div>
						<div class="bangdan-item">
							<dl v-for="item in topList" :key="item.id">
								<dt>
									<div class="image">
										<img :src="item.coverImgUrl" alt="">
									</div>
									<div class="bofang">
										<p>{{item.name}}</p>
										<i></i>
										<i></i>
									</div>
								</dt>
								<dd></dd>
								<dd></dd>
								<dd></dd>
								<dd></dd>
								<dd></dd>
								<dd></dd>
							</dl>
						</div>
					</div>
				</el-main>
				<el-aside width="250px">
					<dl>
						<dt>热门歌手</dt>
						<dd v-for="item in artistsList" :key="item.id">
							<div class="left"><img :src="item.img1v1Url" alt=""></div>
							<div class="right">
								<p>{{item.name}}</p>
							</div>
						</dd>
					</dl>
				</el-aside>
			</el-container>
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
				newList:[],
				hotList:[],
				topList:[],
				artistsList:[],
				banners:[]
			}
		},
		mounted:function(){
			//轮播图数据
			this.axios.get('http://localhost:3000/banner?type=0').then(({data})=>{
				this.banners = data.banners;
			})
			//请求新碟上架
			this.axios.get('http://localhost:3000/top/album').then(({data})=>{
				this.newList = data.weekData;
			})
			//请求榜单
			this.axios.get('http://localhost:3000/toplist').then(({data})=>{
				this.topList = data.list.slice(0,3);
				console.log(data.list)
				this.axios.get('http://localhost:3000/playlist/detail?id='+data.list.id).then(({data})=>{
					console.log('dsjfsdjfskfjdlksjf')
				})
			})
			//热门歌手
			this.axios.get('http://localhost:3000/top/artists?offset=0&limit=30').then(({data})=>{
				this.artistsList=data.artists.slice(0,6);
			})
			//this.axios.get('http://localhost:3000/')
			//热门歌单
			this.axios.get('http://localhost:3000/personalized').then(({data})=>{
				this.hotList = data.result.slice(0,8)
			})
		},
		methods:{
			
			
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../assets/bofangliang/iconfont.css";
	.banner{
		width: 100%;
		height: 285px;
		.conter{
			width: 980px;
			height: 100%;
			margin: 0 auto;
			.el-carousel__item img {
			   width: 100%;
			   height: 100%;
			 }
			 
			 .el-carousel__item:nth-child(2n) {
			   background-color: #99a9bf;
			 }
			 
			 .el-carousel__item:nth-child(2n+1) {
			   background-color: #d3dce6;
			 }
		}
	}
	.el-container{
		 
		margin: 0 auto;
		width: 100%;
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
		 .el-container{
			 width: 980px;
			 background-color: #fff;
			 .el-main {
				 border: 1px solid #ccc;
				 border-bottom: 0px;
				 .hot{
					 .hot-nav{
						 width: 100%;
						 border-bottom: 2px solid #C10D0C;
						 height: 33px;
						 line-height: 33px;
						 display: flex;
						 flex-flow: row nowrap;
						 >a{
							 float: left;
							 display: block;
							 text-decoration: none;
							 color: #333;
							 font-size: 18px;
							 display: flex;
							 flex-flow: row nowrap;
						 }
						 >a::before{
							 content: "";
							 width: 5px;
							 border-radius: 50%;
							 margin: 10px 10px 0px 0px;
							 height: 5px;
							 display: inlin-block;
							 border: 3px solid #C10D0C;
						 }
						 a{
							 padding: 0px 10px;
							 color: #666;
							 text-decoration: none;
						 }
					 }
					 ul{
						 overflow: hidden;
						 margin-left:-42px;
						 box-sizing: border-box;
						 padding: 20px 0px;
						 li{
							 height: 204px;
							 width: 140px;
							 padding: 0px 0px 30px 42px;
							 float: left;
							 .hot-item{
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
							 p{
								 margin-top: 5px;
								 padding: 5px 0px;
								 font-size: 13px;
								 color: #000;
								 line-height: 20px;
							 }
						 }
					 }
				 }
				.new,.bangdan{
					.el-carousel{
						margin: 20px 0px;
						background-color: #F5F5F5;
						border: 1px solid #ccc;
						overflow: hidden;
						padding: 20px;
						box-sizing: border-box;
					 	.el-carousel__item{
							box-sizing: border-box;
							height: 146px;
							display: flex;
							flex-flow: row nowrap;
							align-items: center;
							padding-top:10px ;
							.new-item{
								height: 100%;
								width: 118px;
								margin-left: 10px;
								div{
									width: 118px;
									height: 100px;
									background-image: url(../../../assets/coverall.png);
									position: relative;
									background-position: 0px -570px;
									img{
										width: 100px;
										height: 100px;
									}
									i{
										display: none;
										position: absolute;
										right: 23px;
										bottom: 5px;
										width: 22px;
										height: 22px;
										background-image: url(../../../assets/iconall.png);
										background-position: 0px -85px;
										&:hover{
												background-position: 0px -110px;
										}
									}
									&:hover{
											i{
												display: block;
											}
									}
									
								}
								p{	
									line-height: 18px;
									text-overflow: ellipsis;
									overflow: hidden;
									color: #333;
									white-space: nowrap;
									&:nth-of-type(2){
										color: #999;
									}
								}
							}
					 	}
					 }
					 .new-nav,.bangdan-nav{
						&:extend(.el-container .el-container .el-main .hot .hot-nav);
						a:extend(.el-container .el-container .el-main .hot .hot-nav>a){
							&:before{
								&:extend(.el-container .el-container .el-main .hot .hot-nav>a::before);
							}
						}
					 }
					 .bangdan-item{
						 width: 100%;
						 height: 400px;
						 border: 1px solid #ccc;
						 margin-top: 20px;
						 display: flex;
						 flex-flow: row nowrap;
						 dl{
							 width: 230px;
							 border-right: 1px solid #ccc;
							 &:last-child{
								 border: 0px;
							 }
							 dt{
								 background-color: #F4F4F4;
								 padding: 20px;
								 border-bottom: 1px solid #ccc;
								 display: flex;
								 flex-flow: row nowrap;
								 .image{
									 height: 80px;
									 width: 80px;
									 background-image: url(../../../assets/coverall.png);
									 background-position: -145px -57px;
									 background-color: black;
									 img{
										 width: 100%;
										 height: 100%;
									 }
								 }
								 .bofang{
									 width: 110px;
									 display: flex;
									 flex-direction: row;
									 flex-wrap: wrap;
									 p{
										 font-weight: bold;
										 width: 100%;
										 font-size: 13px;
										 text-align: center;
										 line-height: 30px;
									 }
									 i{
										 width:22px;
										 height: 22px;
										 margin-left: 10px;
										 background-image: url(../../../assets/index.png);
										 &:nth-of-type(1){
											 background-position: -267px -205px;
											 &:hover{
												 background-position: -267px -235px;
											 }
										 }
										 &:nth-of-type(2){
										 	background-position: -300px -205px;
											&:hover{
												background-position: -300px -235px;
											}
										 }
									 }
								 }
							 }
							 dd{
								height: 32px;
								background-color: #F4F4F4;
								&:nth-of-type(2n+1){
									background-color: #E8E8E8;
									
								}
							 }
						 }
					 }
				 }
				 
			}
			 .el-aside {
			   border: 1px solid #ccc;
			   border-left: 0px;
			   border-bottom: 0px;
			   dl{
				   padding: 20px;
				   width: 100%;
				   box-sizing: border-box;
				   dt{
					   width: 100%;
					   height: 24px;
					   border-bottom: 1px solid #999;
					   font-weight: bold;
				   }
				   dd{
					   width:100%;
					   height: 62px;
					   border: 1px solid #ccc;
					   background-color: #FAFAFA;
					   margin-top: 15px;
					   box-sizing: border-box;
					   display: flex;
					   flex-flow: row nowrap;
					   .left{
						   width: 60px;
						   height: 100%;
						   img{
							   width: 100%;
							   height: 100%;
						   }
					   }
					   .right{
						   flex-grow: 1;
						   box-sizing: border-box;
						   padding-left: 10px;
						   width: 98px;
						   height: 100%;
						   display: flex;
						   flex-flow: column nowrap;
						   justify-content: center;
						   p{
							   line-height: 62px;
							   font-size: 15px;
						   }
						  
					   }
					    &:hover{
							background-color: #F4F4F4;
					   }
				   }
			   }
			}
		 }
		
	}
</style>
