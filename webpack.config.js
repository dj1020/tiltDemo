var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "/css/[name].css",
    disable: true // 為了 Hot Reload
});

var config = {

	entry: [
		path.join(__dirname, 'src', 'main')
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
        		test: /\.css$/,
        		use: ['style-loader', 'css-loader']
      		},
			{
	            test: /\.s[ac]ss$/,
	            // loader: ["style-loader", "css-loader", "sass-loader"]
	            use: extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                fallback: "style-loader"
	            })
        	},
        	// image & font
      		{
      			test: /\.(woff|woff2|eot|ttf|otf)$/i,
      			loader: 'url-loader?limit=8192&name=[name].[ext]'
      		},
      		{
      			test: /\.(jpe?g|png|gif|svg)$/i,
      			loader: 'url-loader?limit=8192&name=[name].[ext]'
      		},
      		{
			    test: require.resolve('jquery'),
			    loader: 'expose-loader?jQuery!expose-loader?$'
			}
        ],
	},

	resolve: {
	    extensions: ['*', '.js', '.vue'],
	    /**
	     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
	     */
	    alias: {
	    	// 設定縮路徑
	      	vue: 'vue/dist/vue.js',
	      	components: path.resolve(__dirname, './src/components'),
    		styles: path.resolve(__dirname, './src/sass'),
    		assets: path.resolve(__dirname, './src/assets'),
	    }
	},

	devServer: {
  		inline: true,
  		hot:true
	},

    devtool: 'eval-source-map',


	/* Plugins */
	plugins: [
		extractSass,
    	new webpack.HotModuleReplacementPlugin(),
	    new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          'root.jQuery': 'jquery',
          tilt: 'tilt.js',
      	}),
  	]
}

module.exports = config