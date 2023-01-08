---
title: React Hooks
date: 2023-01-07 06:50:20
---

> 以下是閱讀《從Hooks開始讓你的網頁React起來》所做的筆記。
> 
> [iThome鐵人賽頁面](https://ithelp.ithome.com.tw/articles/10216355)

# 樣板字面值 Template literals (Template strings)

* [Template literals (Template strings) JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)

**帶入變數**
```javascript
const favoritePhone = 'iPhone';
console.log(`I want to buy the ${favoritePhone}`);

// output
// I want to buy the iPhone
```

**帶入運算**
```javascript
const favoritePhone2 = 'Galaxy Note';
const currentPrice = 31900;
console.log(`the ${favoritePhone2} is ${currentPrice} now`);
console.log(`the ${favoritePhone2} is ${currentPrice * 0.7} now`);

// output
// the Galaxy Note is 31900 now
// the Galaxy Note is 22330 now
```

**帶入HTML 區塊**
```javascript
const buttonGroup = `
    <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> Checked
        </label>
    </div>
`;
document.body.innerHTML = buttonGroup;
```

# 箭頭函式 (arrow functions)
* [Template literals (Template strings) JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**傳統定義函式**
```javascript
function showIphonePrice(price) {
    return `The Phone price is ${price}`;
}
console.log(showIphonePrice(16500));

// output:
// The Phone price is 16500
```

**箭頭函式**

1. 使用箭頭函式可以變的更精簡。
2. 箭頭函式會把參數放在前面的小括弧 () 中，中間搭配 =>，執行內容放在後面的大括弧 {} 內。

```javascript
const showIphonePrice2 = (price) => {
    return `The Phone price is ${price}`;
}
console.log(showIphonePrice2(18500));

// output:
// The Phone price is 18500
```

回傳物件時則外圍需要用小括弧包起來

```javascript
const showIphonePrice3 = () => ({
    deviceName: 'iPhone11',
    price: 24900,
    brand: 'Apple',
    marchants: ['apple store', 'pchome', 'momo', 'shopee']
});
console.log(showIphonePrice3());

// output:
// {deviceName: 'iPhone11', price: 24900, brand: 'Apple', marchants: Array(4)}
```