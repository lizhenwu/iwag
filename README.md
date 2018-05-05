# iwag

## 2018/4/2

Consider to build some UI components with react for my own use.

## 2018/5/4

为了支持在定义class时可以用以下语法安装了[babel-plugin-transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties)插件，然后为了让eslint支持这种语法安装了[babel-eslint](https://github.com/babel/babel-eslint)
````js
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
  }
````
并且分别在.babelrc和.eslintrc文件中添加配置
```json
"plugins": [
        "transform-class-properties"
    ]
```
```json
"parser": "babel-eslint"
```
因为这个项目用的yarn作包管理，vscode工作区设置添加了下条才使得vscode能找到安装的babel-eslint插件，否则报错
```json
"eslint.packageManager": "yarn",
```
