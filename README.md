# React-Calculator

> 简短记录开发中遇到的问题和解决办法

## JS

```jsx
//在需要从原先的state更改时

//错误
this.setState({
  equation: this.state.equation + "" + character,
});

//正确
this.setState((state, props) => ({
  equation: state.equation + "" + character,
  isDecimalAdded: true,
}));
```

```jsx
//正确示例
<button onClick={() => this.append("+")} className="add" style={"grid-area" : "plus"}>
  +
</button>

//react中class应该改为className (应该是这样的吧...
//另外传入带参数的函数时
//要采用onXxx={() => this.method("param")}
//不能直接传入onXxx={this.method("param")}

//style应该使用object形式
//不能够直接style="grid-area : plus"
```

```jsx
//eval()函数waring 目前我不知道怎么解决

//["+", "-", "*", "/"].indexOf(character) > -1
//第一次见到这样用的,以后需要记住数组也行
```

## CSS

1. 别忘记清楚浏览器自带样式

   目前只知道清除这玩意

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

2. 两个布局方式 `flex` `grid`

3. `box-shadow` `inset`

4. `rgba()`

5. `linear-gradient`

6. `text-align`

> u1s1 拟态化真好看

> 下次改用 hook 简化
