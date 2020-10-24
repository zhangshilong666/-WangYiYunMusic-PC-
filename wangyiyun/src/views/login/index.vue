<template>
	<div class="login">
		<div class="head">
			<span>登录</span>
		</div>
		<div class="main" v-show="indexShow">
			<div class="left">
				<div class="L-bg"></div>
				<button @click="signinClick">手机号登陆</button>
				<button>注册</button>
				</el-form>
			</div>
			<div class="right">
				<span>微信登陆</span>
				<span>QQ登录</span>
				<span>微博登录</span>
				<span>网易邮箱账号登陆</span>
			</div>
		</div>
		<div class="signin" v-show="signinShow">
			<el-form :model="loginForm" :rules='loginFormRules' ref='loginFormRef'>
			  <el-form-item size="small" prop='phone'>
					<el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
			  </el-form-item>
			  <el-form-item size="small" prop='password'>
					<el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
			  </el-form-item>
			   <el-form-item size="small">
			        <el-button @click="signIn">登录</el-button>
			   </el-form-item>
			</el-form>
			
			<div class="foot"><span @click="signinClick"><其他登陆方式</span></div>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				indexShow:true,
				signinShow:false,
				loginForm:{
					phone:"",
					password:""
				},
				//表单效验规则
				loginFormRules:{
					phone:[
						{required:true,message:'请输入手机号',trigger: 'blur'},
						{min:3,max:11,message:'请输入正确的手机号'}
					],
					password:[
						{required:true,message:"请输入密码",trigger: 'blur'},
						 { min: 8, message: '密码最少8位', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			signIn(){
				this.$refs.loginFormRef.validate(valid=>{
					if(!valid) return;
					this.axios.post('http://localhost:3000/login/cellphone',this.loginForm).then(({data})=>{
						if(data.code !== 200) return this.$message.error('登陆失败');
						this.$message.success('登陆成功');
						window.sessionStorage.setItem("token",data.token);
						this.$router.push('/my')
					})
				})
			},
			loginClick(){
				if(!this.loginShow){
					this.loginShow = true;
				}else{
					this.loginShow = false;
				}
			},
			signinClick(){
				if(!this.signinShow){
					this.signinShow = true;
					this.indexShow = false;
				}else{
					this.signinShow = false;
					this.indexShow = true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login{
		width: 530px;
		height: auto;
		border-radius: 5px;
		background-color: #fff;
		position: fixed;
		overflow: hidden;
		top: 50%;
		left: 50%;
		display: flex;
		flex-flow: column nowrap;
		transform: translate(-50%,-50%);
		box-shadow: 0px 5px 16px rgba(0,0,0,0.8);
		z-index: 10000;
		.head{
			height: 38px;
			background-color: #242424;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			padding: 0px 20px;
			span{
				color: #fff;
				font-size: 13px;
				font-weight: bold;
				
			}
		}
		.main{
			padding: 40px;
			height: 334;
			display: flex;
			flex-flow: row nowrap;
			.left{
				width: 224px;
				height: 202px;
				padding-right: 35px;
				border-right: 1px dotted #ccc;
				.L-bg{
					height: 120px;
					width: 100%;
					background-image: url(../../assets/loginbg.png);
					background-size: 100%;
					
				}
				button{
					width: 100%;
					border-radius: 3px;
					border: 1px solid #ccc;
					margin-top: 10px;
					height: 30px;
					box-sizing: border-box;
					color: #fff;
					background-image: linear-gradient(to bottom,#4DA1E0,#1D6EBE);
					&:nth-of-type(1){
						&:hover{
							background-image: linear-gradient(to bottom,#1D6EBE,#4DA1E0);
						}
					}
					&:nth-of-type(2){
						color: #333;
						background-image: linear-gradient(to bottom,#FCFCFC,#F8F8F8);
						&:hover{
							background-image: linear-gradient(to bottom,#F8F8F8,#FCFCFC);
						}
					}
				}
			}
			.right{
				flex-grow: 1;
				height: 202px;
				padding-left: 40px;
				display: flex;
				flex-flow: column nowrap;
				span{
					width: 100%;
					flex-grow: 1;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					
					&::before{
							width: 38px;
							height: 38px;
							content: '';
							display: block;
							background-image: url(../../assets/loginlogo.png);
							margin-right: 10px;
						}
					&:nth-of-type(1){
						&::before{
							background-position: -150px -670px;
							
						}
					}
					&:nth-of-type(2){
						&::before{
							background-position: -190px -670px;
							
						}
					}
					&:nth-of-type(3){
						&::before{
							background-position: -230px -670px;
							
						}
					}
					&:nth-of-type(4){
						&::before{
							background-position: -270px -670px;
							
						}
					}
					
				}
			}
		}
		.signin{
			height: 238px;
			display: flex;
			flex-flow: column nowrap;
			.el-form{
				flex-grow: 1;
				display: flex;
				padding: 20px;
				flex-flow: column nowrap;
				justify-content: space-around;
				align-items: center;
				.el-form-item{
					width: 220px;
					.el-button{
						width: 100%;
						background-image: linear-gradient(to bottom,#4493DC,#0E65BC);
						border: 1px solid #4DA1E0;
						color: #FFF;
						&:hover{
							background-image: linear-gradient(to bottom,#0E65BC,#4493DC);
						}
					}
				}
			}
			.foot{
				height: 49px;
				border-top: 1px solid #CCCCCC;
				background-color: #F7F7F7;
				line-height: 40px;
				padding-left: 20px;
				color: #1E6FBF;
			}
		}
		.signup{
		}
	}
</style>
