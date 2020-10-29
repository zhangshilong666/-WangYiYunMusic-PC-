<template>
	<footer>
		<div class="play">
			<div class="bofang">
				<i></i>
				<i @click='playOrPause' :class={active:playing}></i>
				<i></i>
			</div>
			<div class="xiangqing">
				<img :src="info[0].al.picUrl" alt="">
			</div>
			<div class="playing">
				<p><span>{{info[0].name}}</span><br>{{info[0].ar[0].name}}</p>
				<div class="block">
					<el-slider :show-tooltip='false'  v-model='currentTime' :max='duration' @change='durationChange'></el-slider>
				</div> 
				<p><span>{{currentTime | timeFormat}}</span><span>/</span>{{duration | timeFormat}}</p>
			</div>
			<div class="gengduocaozuo">
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<span></span>
			</div>
		</div>
		<div class="lock">
			<i></i>
		</div>
	</footer>
</template>

<script>
	export default{
		props:{
			musicinfo:''
		},
		data:function(){
			return{
				//音乐总进度
				duration:0,
				//音乐当前进度
				currentTime:0,
				//音乐播放状态
				playing:false,
				info:[{
					name:'歌曲名',
					ar:[
						{
							name:'歌手名'
						}
					],
					al:{
						picUrl:''
					}
				}]
			}
		},
		watch:{
			musicinfo:function(){
				this.info = this.musicinfo;
				this.playing=true;
			}
		},
		mounted:function(){
			this.a.addEventListener('timeupdate',()=>{
				this.duration = this.a.duration;
				this.currentTime = this.a.currentTime
			})
			console.log(this.musicinfo.typeof)
		},
		methods:{
			//暂停播放
			playOrPause(){
				if(this.a.src == '') return;
				if(!this.a.paused){
					this.a.pause();
					this.playing = false;
				}else{
					this.a.play()
					this.playing = true;
				}
			},
			durationChange(){
			
				this.a.currentTime = this.currentTime
			}
		},
		filters:{
			timeFormat:function(time){
				var minute = time / 60;
				var minutes = parseInt(minute);
						
				if (minutes < 10) {
				  minutes = "0" + minutes;
				}
						
				//秒
				var second = time % 60;
				var seconds = Math.round(second);
				if (seconds < 10) {
				  seconds = "0" + seconds;
				}
				return `${minutes}:${seconds}`;
			}
		}
	}
</script>

<style scoped lang="less">
	footer{
		z-index: 100;
		position: fixed;
		bottom: 0px;
		height: 53px;
		width: 100%;
		background-image: url(../../assets/playbar.png);
		.play{
			width: 980px;
			height: 47px;
			position: absolute;
			bottom: 0px;
			left: 50%;
			margin-left: -490px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			.bofang{
				width: 110px;
				height: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				i{
					height: 28px;
					width: 28px;
					background-image: url(../../assets/playbar.png);
					&:nth-of-type(1){
						background-position: 0px -130px;
						&:hover{
							background-position: -30px -130px;
						}
					}
					&:nth-of-type(2){
						width: 36px;
						height: 36px;
						background-position: 0px -205px;
						&:hover{
							background-position: -40px -205px;
						}
						&.active{
							background-position:0px -166px;
						}
					}
					&:nth-of-type(3){
						background-position: -80px -130px;
						&:hover{
							background-position: -110px -130px;
						}
					}
					
				}
			}
			.playing{
				height: 100%;
				flex-grow: 1;
				box-sizing: border-box;
				padding: 0px 10px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				align-items: center;
				p{
					line-height: 18px;
					span{
						color:#ccc;
						margin: 0px 5px 5px 0px;
					}
					&:nth-of-type(1){
						display: block;
						margin-right: 10px;
						width: 80px;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					&:nth-of-type(2){
						margin-left: 10px;
					}
				}
				.block{
					flex-grow: 1;
					/deep/ .el-card__body {
						padding: 0 !important;
					}
					
					/deep/ .el-slider__button {
						border: 2px solid rgb(198, 47, 47) !important;
					}
					
					/deep/ .el-slider__button {
						width: 10px !important;
						height: 10px !important;
					}
					
					/deep/ .el-slider__bar {
						background-color: rgb(198, 47, 47);
					}
					
					.el-slider {
						flex-grow: 80%;
						margin: 0 auto;
					}
				}
				
			}
			.xiangqing{
				width: 34px;
				height: 34px;
				margin-left: 30px;
				background-image: url(../../assets/playbar.png);
				background-position: 0px -80px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.gengduocaozuo{
				width: 190px;
				height: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items:center;
				i{
					width: 25px;
					height: 25px;
					background-image: url(../../assets/playbar.png);
					&:nth-of-type(1){
						background-position: -85px -163px;
						&:hover{
							background-position: -85px -189px;
						}
					}
					&:nth-of-type(2){
						background-position: -113px -163px;
						&:hover{
							background-position: -113px -189px;
						}
					}
					&:nth-of-type(3){
						background-position: 0px -343px;
						&:hover{
							background-position: -30px -343px;
						}
					}
					&:nth-of-type(4){
						background-position: 0px -248px;
						&:hover{
							background-position: -29px -248px;
						}
					}
				}
				span{
					height: 25px;
					width: 60px;
					
					
				}
			}
		}
		.lock{
			position: absolute;
			right: 20px;
			height: 22px;
			top: -15px;
			width: 52px;
			background-image: url(../../assets/playbar.png);
			background-position: 0px -380px;
			i{
				height: 16px;
				width: 16px;
				display: block;
				margin: 6px auto auto;
				background-image: url(../../assets/playbar.png);
				background-position: -100px -380px;
				&:hover{
					background-position: -100px -400px;
				}
			}
		}
	}
</style>
