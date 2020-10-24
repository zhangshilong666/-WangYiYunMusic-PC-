<!-- <template>
	<div>
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
								  <span>播放：<em>dsfsdf</em>次</span>
							  </div>
							 <!-- <el-table :data="tableData">
								  <el-table-column type="index"></el-table-column>
								  <el-table-column prop="name" label="歌名"></el-table-column>
								  <el-table-column prop="time" label="时长"></el-table-column>
								  <el-table-column prop="ar[0].name" label="歌手"></el-table-column>
							  </el-table>
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
									  <tr v-for="item in dataList.tracks" :key='item.id'>
										  <td width="58px"><span>{{item.length}}</span><span>-0</span></td>
										  <td><img src="" alt=""><span>{{item.name}}</span></td>
										  <td width="71px">03:54</td>
										  <td width="153px">{{item.ar.name}}</td>
									  </tr>
								  </tbody>
							  </table>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				id:'',
				dataList:[],
			}
		},
		created(){
			this.id = this.$route.query.id;
			
			this.axios.get('http://localhost:3000/playlist/detail?id='+this.id).then(({data})=>{
				this.dataList = data.playlist;
				
			})
		}
	}
	
</script>

<style lang="less" scoped>
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
					}
				}
			}
		}
	}
</style>
 -->