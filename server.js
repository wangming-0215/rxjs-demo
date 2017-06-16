const webpackConfig = require("./webpack/webpack.config");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const host = 'localhost';
const port = 3000;
webpackConfig.entry.app.unshift(`webpack-dev-server/client?http://${host}:${port}/`, "webpack/hot/dev-server");

const server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    stats: {
        colors: true,
        process: true,
    }
});

server.listen(port, host, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(`Listening at http://${host}:${port}`);
});