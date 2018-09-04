# jsUtils

在 lodash 基础上扩展的一些 jsUtils

## Installation

Using npm:

`npm install jsutils-100`

in react:

`import jsUtils from "jsutils-100"`

## 表单校验建议

- 字段前后端类型一致

  有个实际遇到的例子：前后端的类型不一致。背景是：该字段是必填的。由于后端直接返回来的数据是数字`0`,而前端重新填写的数据是字符串`"0"`,而且这个字段前端的校验是:

  ```js
  isEmpty(data) {
    return data == "" || data == null || data === "[]" ? true : false;
  }
  ```

  这就导致，返回来的数据，在完全没有改动的情况下，进行保存，就会提示“该字段需要填写”，而当自己重新填写后，就能直接保存了。

  ![](./images/WechatIMG2939.png)
  ![](./images/WechatIMG2940.png)

  > 特别需要注意的一点：`0==""` 为 true

## 单元测试

`yarn test` or `npm test`

## 发布

`npm publish`
