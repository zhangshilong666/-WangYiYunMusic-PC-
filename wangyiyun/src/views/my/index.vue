<template>
	<div class="my">
		<div class="my-main">
			<div class="bg">
				<router-link to="/login"></router-link>
			</div>
		</div>
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
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.my{
	border-top: 5px solid #C20C0C;
	.my-main{
		width: 900px;
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
		background-color: #fff;
		overflow: hidden;
		height: 700px;
		margin: 0 auto;
		.bg{
			height: 268px;
			width: 807px;
			margin: 104px auto;
			background-image: url(../../assets/mymusic.png);
			overflow: hidden;
			a{
				margin: 203px 0px 0px 483px;
				height: 45px;
				width: 167px;
				display: block;
				&:hover{
					background-image: url(../../assets/mymusic.png);
					background-position: -1px -279px;
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
						background-image: url(../../assets/foot_enter_new.png);
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
</style>
