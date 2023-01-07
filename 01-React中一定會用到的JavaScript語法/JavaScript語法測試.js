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
function sayHello(name) {
    console.log('Hello', name);
}

sayHello('React');

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