const path = require('path');
const resolve = function(dir) {
	return path.join(__dirname, dir)
  }
const config = {
	chainWebpack: config => {
		config.resolve.alias
		  .set('@', resolve('src'))
		  .set('views', resolve('src/views'))
		  .set('router',resolve('src/router'))
		  .set('store',resolve('src/store'))
		  .set('common',resolve('src/common'))
		  .set('components', resolve('src/components'))
		config.optimization.runtimeChunk('single')
	  }
}
module.exports = config;