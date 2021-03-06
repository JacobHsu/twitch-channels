# twitch-channels

[emmet cheat-sheet](https://docs.emmet.io/cheat-sheet/)  
`#container>ul>(li.item>.avatar>img.img+p.channel{頻道名稱}+p.host{實況主名字})*9`  

# Twitch API

[Get started with Twitch development](https://dev.twitch.tv/get-started) 
[Get Live Streams](https://dev.twitch.tv/docs/v5/reference/streams/#get-live-streams)   
[League%20of%20Legends](https://www.twitch.tv/directory/game/League%20of%20Legends)  

# sass

`npm install -g sass`  
`$sass sass/style.sass css/style.css`  

### Sublime
`ctrl+shift+p`  搜索sass，點擊安裝  

# Webpack

把 jQuery 以及其他 js 檔案都打包成一個 bundle.js  

Basic Setup  
`npm init` package.json  
`npm install webpack webpack-cli --save-dev`  
`npm install jquery --save-dev`  

`$npx webpack src/index.js --output dist/bundle.js`

# Gulp

把 CSS, JavaScript 都 inline 進 index.html  
不發出任何 CSS 跟 JavaScript 的 Request  

[gulp-inline](https://github.com/ashaffer/gulp-inline)  

安裝這個專案的 Gulp 套件  
`npm install gulp gulp-inline -save-dev`  

`$gulp`  

# note

[vanilla.js](http://vanilla-js.com/)  
`i18n` 的全名叫做internationalization，這個簡寫的由來就是因為 i 跟 n 中間有 18 個字母。

# gh-pages  

`$git subtree push --prefix dist origin gh-pages`  