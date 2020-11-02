const proxy = require('http-proxy-middleware');
module.exports={
	devServer:{
		host:"localhost",
		port:80,
		proxy:{
			'http://localhost:3000':{
				target:"http://49.232.11.225:3000",
				changeOrigin: true, //是否跨域
				pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
				'^http://localhost:3000': "/" ,
				}
			}
		}
	}
}