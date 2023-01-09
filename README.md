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

# 解構賦值(Destructuring assignment)

* [解構賦值(Destructuring assignment) - JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

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

***進階：取出物件中的物件***

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

***陣列的解構賦值***

定義一個陣列

```javascript
const mobileBrands = [
    '三星', '蘋果', '華為', 'Oppo', 'Vivo',
    '小米', 'LG', '聯想', 'ZTE'
];
```

例如我想取出前三名的品牌，傳統沒有解構賦值的寫法。

```javascript
const base = mobileBrands[0];
const second = mobileBrands[1];
const third = mobileBrands[2];
```
使用解構賦值，自動建立 base, second, third 變數，並將 mobileBrands 元素 0, 1, 2 值自動帶入。

```javascript
const [base, second, third] = mobileBrands;

console.log(base, second, third);

// output:
// 三星 蘋果 華為
```
# 展開語法(Spread syntax)

* [展開語法(Spread syntax) - JavaScript MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

定義一個智慧手機的物件

```javascript
const mobilePhone = {
    name: 'Mobile Phone',
    year: '2019'
};
```
複製一個新物件，其中 name 屬性就會被覆寫，而 os 屬性會被添加進去，成為一個新物件。

```javascript
const iPhone = {
    ...mobilePhone,
    name: 'iPhone',
    os: 'IOS'
};

console.log(iPhone);

// output:
// {name: 'iPhone', year: '2019', os: 'IOS'}
```
展開語法同樣也可以用來複製陣列

```javascript
const mobileOnSale = ['三星', '蘋果', '華為'];
const allMobile = [...mobileOnSale, 'Oppo', 'Vivo', '小米'];

console.log(allMobile);

// output:
// ['三星', '蘋果', '華為', 'Oppo', 'Vivo', '小米']
```
# 其餘語法

* 其餘語法(Spread syntax) - JavaScript MDN

其餘語法可以將解構賦值中沒有被取出來的變數和陣列元素，都放到一個壓縮包裡。

```javascript
const production = {
    id: 'iPhone',
    image: 'https://i.imgur.com/b3qRKiI.jpg',
    explanation: '全面創新三相機系統，身懷萬千本領，卻簡單易用。',
    brand: 'Apple',
    aggregateRating: {
        ratingValue: '4.6',
        reviewCount: '120',
    },
    offers: {
        priceCurrency: 'TWD',
        price: '26,900',
    },
};

const { id, explanation, ...other } = production;

console.log(other);

// output:
// {image: 'https://i.imgur.com/b3qRKiI.jpg', brand: 'Apple', aggregateRating: {…}, offers: {…}}
```

同樣適用於陣列

```javascript
const mobileBrands = [
    '三星', '蘋果', '華為', 'Oppo', 'Vivo',
    '小米', 'LG', '聯想', 'ZTE'
];

const [base, second, third, ...someone] = mobileBrands;

// 變數不一定要取名為 other
console.log(someone);

// output:
// ['Oppo', 'Vivo', '小米', 'LG', '聯想', 'ZTE']