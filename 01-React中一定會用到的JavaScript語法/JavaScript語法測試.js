// 變數宣告
let framework = 'React';
const webFramework = 'React';

// 迴圈
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 判斷式只有在i=5時才顯示
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('i等於5時才顯示:');
        console.log(i);
    }
}

/*
    // 函式建立
    function sayHello() {
        console.log('Hello');
    }

    // 或者
    const sayHello = function () {
        console.log('Hello');
    }
*/

// 帶入參數
// function sayHello(id) {
//     console.log('Hello', id);
// }
// sayHello('React');

// 陣列建立
const frameworks = ['React', 'Vue', 'Angular'];

// 建立物件
const smartPhone = {
    deviceName: 'iPhone11',
    price: 24900,
    brand: 'Apple',
    marchants: ['apple store', 'pchome', 'momo', 'shopee']
};

// 樣版字面值 (Template literals / Template string)
// 實際應用
// 帶入變數
const favoritePhone = 'iPhone';
console.log(`I want to buy the ${favoritePhone}`);

// 帶入運算
const favoritePhone2 = 'Galaxy Note';
const currentPrice = 31900;
console.log(`the ${favoritePhone2} is ${currentPrice} now`);
console.log(`the ${favoritePhone2} is ${currentPrice * 0.7} now`);

// 帶入HTML 區塊
const buttonGroup = `
    <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> Checked
        </label>
    </div>
`;
document.body.innerHTML = buttonGroup;

// 箭頭函式 (arrow functions)
// 傳統定義函式
function showIphonePrice(price) {
    return `The Phone price is ${price}`;
}
console.log(showIphonePrice(16500));

// output:
// The Phone price is 16500

const showIphonePrice2 = (price) => {
    return `The Phone price is ${price}`;
}
console.log(showIphonePrice2(18500));

// output:
// The Phone price is 18500

// 回傳物件時則外圍需要用小括弧包起來

const showIphonePrice3 = () => ({
    deviceName: 'iPhone11',
    price: 24900,
    brand: 'Apple',
    marchants: ['apple store', 'pchome', 'momo', 'shopee']
});
console.log(showIphonePrice3());

// output:
// {deviceName: 'iPhone11', price: 24900, brand: 'Apple', marchants: Array(4)}

// 解構賦值和物件名稱縮寫
// 當我們拿到一大包內容物件時，而我們只需要該物件的一些屬性時，這就適用解構賦值。

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

// 從物件取值，傳統上這樣宣告。
// const name = product.name;
// const description = product.description;
// console.log(name, description);

// output:
// iPhone 全面創新三相機系統，身懷萬千本領，卻簡單易用。

// 使用解構賦值，可以快速建立變數及取值，變數名稱與物件內必須相等，如果沒有相對應的變數名稱，變數同樣會被宣告，但是其值會變成 undefined
const { name, description, battery } = product;
console.log(name, description, battery);

// output:
// iPhone 全面創新三相機系統，身懷萬千本領，卻簡單易用。 undefined

// 取出物件中的物件
// const {
//     offers: { price }
// } = product;

// console.log(price); // 26,900
// console.log(offers); // ReferenceError: offers is not defined

// 如果必須同時建立 offers 和 price 兩個變數，先透過解構賦值取出 offers，再從 offers 取出 preice。

const { offers } = product;
const { price } = offers;
console.log(price);
console.log(offers);