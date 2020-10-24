<template>
	<footer>
		<div class="play">
			<div class="bofang">
				<i></i>
				<i></i>
				<i></i>
			</div>
			<div class="xiangqing">
				
			</div>
			<div class="playing">
				
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
			}
			.xiangqing{
				width: 34px;
				height: 34px;
				margin-left: 30px;
				background-image: url(../../assets/playbar.png);
				background-position: 0px -80px;
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
