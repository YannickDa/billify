const server = require("universal-webpack").server;
const settings = require("../../webpack/universal-webpack-settings");
const configuration = require("../../webpack/webpack.config");

server(configuration, settings);
