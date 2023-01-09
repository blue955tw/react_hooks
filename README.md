---
title: React Hooks
date: 2023-01-07 06:50:20
---

> 以下是閱讀《從Hooks開始讓你的網頁React起來》所做的筆記。
> 
> [iThome鐵人賽頁面](https://ithelp.ithome.com.tw/articles/10216355)

# 樣板字面值 Template literals (Template strings)

* [樣板字面值(Template literals) - JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)

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
* [箭頭函式運算式(arrow function expression) - JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

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

# 解構賦值

## 物件的解構賦值

當我們拿到一大包內容物件時，而我們只需要該物件的一些屬性時，這就適用解構賦值。

```javascript
const product = {
    name: 'iPhone',
    image: 'https://i.imgur.com/b3qRKiI.jpg',
    description: '全面創新三相機系統，身懷萬千本領，卻簡單易用。',
    brand: 'Apple',
    offers: {
        priceCurrency: 'TWD',
        price: '26,900',
    },
};
```

從物件取值，傳統上這樣宣告。

```javascript
const name = product.name;
const description = product.desc
console.log(name, description);

// output:
// iPhone 全面創新三相機系統，身懷萬千本領，卻簡單易用。
```

使用解構賦值，可以快速建立變數及取值，變數名稱與物件內必須相等，如果沒有相對應的變數名稱，變數同樣會被宣告，但是其值會變成 undefined

```javascript
const { name, description, battery } = product;
console.log(name, description, battery);

// output:
// iPhone 全面創新三相機系統，身懷萬千本領，卻簡單易用。 undefined
```

## 進階：取出物件中的物件

```javascript
const {
    offers: { price }
} = product;

console.log(price);
console.log(offers);

// output:
// 26,900
// ReferenceError: offers is not defined
// 這裡沒有宣告 offers 的變數，所以會報錯。
```

如果必須同時建立 offers 和 price 兩個變數，先透過解構賦值取出 offers，再從 offers 取出 preice。

```javascript
const { offers } = product;
const { price } = offers;

console.log(price);
console.log(offers);

// output:
// 26,900
// {priceCurrency: 'TWD', price: '26,900'}
```