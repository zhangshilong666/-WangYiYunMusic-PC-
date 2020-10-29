<template>
	<div class="paihang-body">
		<el-container>
			<el-container>
			  <el-aside width="240px">
				  <dl>
					  <dt>云音乐特色榜</dt>
					  <router-link tag="dd" v-for="item in leftList" :key="item.id" @click="gedanMian(item.id)" :to="{name:'paihang',query:{id:item.id}}">
					  
						  <div class="left">
							  <img :src="item.coverImgUrl" alt="">
						  </div>
						  <div class="right">
							  <p>{{item.name}}</p>
							  <span>{{item.updateFrequency}}</span>
						  </div>
					  </router-link>
				  </dl>
			  </el-aside>
			  <el-main>
				<div class="head">
									  <div class="h-left">
										  <img alt="" :src="dataList.coverImgUrl">
									  </div>
									  <div class="h-right">
										  <h1>{{dataList.name}}</h1>
										  <p>{{dataList.description}}</p>
										  <div>
											  <el-button size='small'>播放</el-button>
											  <el-button size='small'>{{dataList.subscribedCount}}</el-button>
											  <el-button size='small'>{{dataList.shareCount}}</el-button>
											  <el-button size='small'>下载</el-button>
											  <el-button size='small'>{{dataList.commentCount}}</el-button>
										  </div>
									  </div>
				</div>
				<div class='body'>
									  <div class="b-head">
										  <span>歌曲列表</span>
										  <span>首歌</span>
										  <span>播放：<em>{{dataList.playCount}}</em>次</span>
									  </div>
									  <table>
										  <thead>
											  <tr>
												  <td></td>
												  <td>标题</td>
												  <td>时长</td>
												  <td>歌手</td>
											  </tr>
										  </thead>
										  <tbody>
											  <tr v-for="(item,index) in dataList.tracks" :key='item.id' >
												  <td width="58px"><span>{{index+1}}</span></td>
												  <td><img src="" alt=""><span>{{item.name}}</span></td>
												  <td width="71px">{{item.dt | songsTime}}</td>
												  <td width="153px">{{item.ar[0].name}}<i @click="getMusicUrl(item.id)"></i></td>
												  
											  </tr>
										  </tbody>
									  </table>
				</div>
			  </el-main>
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
				leftList:[],
				tableData:[],
				dataList:[]
			}
		},
		mounted:function(){
			this.axios.get("http://localhost:3000/toplist/detail").then(({data})=>{
				this.leftList = data.list;
				
			})
		},
		methods:{
			getMusicUrl(id){
				this.axios.get('http://localhost:3000/song/url?id='+id).then(({data})=>{
					this.$emit('changeUrl',data.data[0].url,)
				})
				this.axios.get('http://localhost:3000/song/detail?ids='+id).then(({data})=>{
					this.$emit('getMusicInfo',data.songs)
				})
			}
		},
		beforeRouteEnter (to, from, next){
		  next(vm=>{
				vm.axios.get('http://localhost:3000/playlist/detail?id='+to.query.id).then(({data})=>{
					vm.dataList = data.playlist;
				})
			})
		},
		beforeRouteUpdate(to,from,next){
			this.axios.get('http://localhost:3000/playlist/detail?id='+to.query.id).then(({data})=>{
				this.dataList = data.playlist;
			})
			next()
		},
		filters:{
			songsTime:function(time){
				const dt = new Date(time);
				const m = (dt.getMinutes()+'').padStart(2, '0')
				const s = (dt.getSeconds()+'').padStart(2, '0')
				return m + ':' +s;
			}
		}
	}
	
</script>

<style lang="less" scoped>
	.paihang-body{
		&>.el-container{
			.el-container{
				width: 980px;
				border-left: 1px solid #ccc;
				border-right: 1px solid #ccc;
				margin: 0 auto;
				.el-aside{
					border-right: 1px solid #ccc;
					background-color: #F9F9F9;
					padding-top: 20px;
					dl{
						margin-top: 20px;
						width: 100%;
						height: auto;
						dt{
							width: 100%;
							padding: 0px 15px 10px;
							box-sizing: border-box;
							color: #000000;
							font-weight: bold;
							font-size: 14px;
							font-family: '宋体';
						}
						dd{
							width: 100%;
							box-sizing: border-box;
							padding: 10px 20px;
							display: flex;
							flex-flow: row nowrap;
							.left{
								img{
									width: 100%;
									height: 100%;
								}
								width: 40px;
								height: 40px;
								margin-right: 10px;
								background-color: #000000;
								
							}
							
							.right{
								flex-grow: 1;
								display: flex;
								flex-flow: column nowrap;
								justify-content: space-around;
								p{
									color: #000000;
								}
								span{
									color: #aaa;
								}
							}
						}
						// .router-link-active{
						// 	background-color: #ccc;
						// }
					}
				}
				.el-main{
					background-color: #fff;
					padding: 0px;
					.head{
						width: auto;
						padding: 40px;
						display: flex;
						flex-flow: row nowrap;
						.h-left{
							height: 158px;
							width: 158px;
							box-sizing: border-box;
							border: 1px solid #ccc;
							padding: 3px;
							img{
								width: 100%;
								height: 100%;
							}
						}
						.h-right{
							padding: 20px;
							flex-grow: 1;
							h1{
								font-size: 22px;
								color: #000000;
								font-family: '宋体';
								margin-bottom: 15px;
							}
							div{
								margin-top: 20px;
							}
						}
					}
					.body{
						padding: 0px 30px 40px 40px;
						.b-head{
							height: 33px;
							border-bottom: 2px solid #C20C0C;
							width: 100%;
							line-height: 33px;
							span{
								&:nth-of-type(1){
									font-size: 20px;
									color: #000000;
									display: block;
									float: left;
									margin-right: 15px;
								}
								&:nth-of-type(2){
									float: left;
									display: block;
								}
								&:nth-of-type(3){
									display: block;
									float: right;
									em{
										color: #C20C0C;
										font-weight: bold;
									}
								}
								
							}
						}
						table{
							border: 1px solid #ccc;
							width: 100%;
							thead{
								border-bottom: 1px solid #ccc;
								td{
									border-left: 1px solid #ccc;
									padding: 10px;
									background-image: linear-gradient(to bottom,#fff,#eee);
									
								}
							}
							tbody{
								
								tr{
									&:nth-of-type(2n-1){
										background-color: #F7F7F7;
									}
									td{
										padding: 10px;
										&:nth-of-type(1){
											display: flex;
											flex-flow: row nowrap;
											justify-content: space-around;
										}
										&:nth-of-type(4){
											display: flex;
											flex-flow: row nowrap;
											justify-content: space-between;
											align-items: center;
											i{
												display: inline-block;
												height: 17px;
												width: 17px;
												background-image: url(../../../assets/index.png);
												background-position: -267px -268px;
												&:hover{
													background-position: -267px -288px;
												}
											}
										}
									}
									
								}
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
