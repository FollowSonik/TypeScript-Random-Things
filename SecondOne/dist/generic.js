"use strict";
// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string | number> = ['Ford', 'Audi']
// const promise: Promise<number | string> = new Promise<string | number>(resolve => {
//     setTimeout(() => {
//         resolve('forsenW in 2 seconds')
//     }, 2000)
// })
// promise.then(data => console.log(data.toString().trim()))
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Sonik' }, { age: 12 });
const auto = mergeObjects({ model: 'Ford' }, { year: 2020 });
const likeString = mergeObjects({ a: 'forsenW' }, { b: 'forsenHead' });
function withCount(value) {
    return {
        value,
        count: `You sucked lol forsenHead. Btw: [${value.length}] symbols`
    };
}
// console.log(withCount('forsenHead :sweat_drops: Kappa'))
// console.log(withCount(['forsenW', 'forsenHead', 'Kappa']))
// console.log(withCount({length: 323232323323}))
// console.log(withCount((30).toString()))
// ==========================
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Sonik',
    age: 12,
    blowJob: 'gachiBASS'
};
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'blowJob'))
// console.log(getObjectValue(person, 'age'))
//==================================
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['S', 'o', 's', 'a', 'l']);
strings.add('!');
strings.remove('monkaS');
// console.log(strings.items)
const numbers = new Collection([1, 3, 5, 7, 9]);
numbers.add(2);
numbers.remove(3);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
//==========================================
const cars = ['Ford', 'Audi'];
// cars.pop()
// cars[55]
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari'
//# sourceMappingURL=generic.js.map