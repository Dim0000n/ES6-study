Hello!

I'm studying ES6 here.
You can find the lesson by link https://youtu.be/TvgkcaaMLcc

To install babel in devDependencies
```
npm i babel-cli babel-core babel-preset-env --save-dev
``` 
Compiles files ('watch' in package.json)
```
babel app/js -d app/dist --presets env -w
```

To install REST and SPREAD plugin
```
npm install --save-dev babel-plugin-transform-object-rest-spread
```
Use plugin in watcher ``` --plugins transform-object-rest-spread```
The "watch"-script
```
babel app/js -d app/dist --plugins transform-object-rest-spread --presets env -w
```
To work with async/await
```
npm i --save-dev babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
```
Best wishes,
Dmitry Utev. 