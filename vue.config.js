/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 12:38:50
 * @LastEditTime: 2019-09-30 12:39:19
 * @LastEditors: Please set LastEditors
 */

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/", //部署应用包时的基本 URL
    outputDir: "dist", //打包目录
    indexPath: "index.html",
  };