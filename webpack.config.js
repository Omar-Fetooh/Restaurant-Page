const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
  entry:{
    index:'./src/index.js',
  },
  
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
    },
    // mode:"development",
   plugins:[
    new htmlWebpackPlugin(
      {
        title:'Restaurant page',
        template:'./src/index.html',
      }),
   ],
   devtool:'inline-source-map',
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][ext]'
        },
      },
    ],
  },
};