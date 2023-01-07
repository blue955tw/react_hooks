---
title: React Hooks
date: 2023-01-07 06:50:20
---

> 以下是閱讀《從Hooks開始讓你的網頁React起來》所做的筆記。
> 
> [iThome鐵人賽頁面](https://ithelp.ithome.com.tw/articles/10216355)

# 樣版字面值 Template literals (Template strings)

* [Template literals (Template strings) JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

**帶入變數**
```javascript
const favoritePhone = 'iPhone';
console.log(`I want to buy the ${favoritePhone}`);
```

**帶入運算**
```javascript
const favoritePhone2 = 'Galaxy Note';
const currentPrice = 31900;
console.log(`the ${favoritePhone2} is ${currentPrice} now`);
console.log(`the ${favoritePhone2} is ${currentPrice * 0.7} now`);
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