// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string | number> = ['Ford', 'Audi']

// const promise: Promise<number | string> = new Promise<string | number>(resolve => {
//     setTimeout(() => {
//         resolve('forsenW in 2 seconds')
//     }, 2000)
// })

// promise.then(data => console.log(data.toString().trim()))

function mergeObjects<T extends object, C extends object>(a: T, b: C) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Sonik' }, { age: 12 })
const auto = mergeObjects({ model: 'Ford' }, { year: 2020 })
const likeString = mergeObjects({ a: 'forsenW' }, { b: 'forsenHead' })


// console.log(`${merged.name} is ${merged.age} btw haHAA\nHas a car ${auto.model} ${auto.year} year.`)
// console.log(likeString)

// ===============================

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `You sucked lol forsenHead. Btw: [${value.length}] symbols`
  }
}

// console.log(withCount('forsenHead :sweat_drops: Kappa'))
// console.log(withCount(['forsenW', 'forsenHead', 'Kappa']))
// console.log(withCount({length: 323232323323}))
// console.log(withCount((30).toString()))

// ==========================
function getObjectValue<T extends object, C extends keyof T>(obj: T, key: C) {
  return obj[key]
}

const person = {
  name: 'Sonik',
  age: 12,
  blowJob: 'gachiBASS'
}

// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'blowJob'))
// console.log(getObjectValue(person, 'age'))

//==================================

class Collection<T extends Number | String | Boolean>{
  constructor(private _items: T[] = []) { }

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection(['S', 'o', 's', 'a', 'l'])
strings.add('!')
strings.remove('monkaS')
// console.log(strings.items)

const numbers = new Collection([1, 3, 5, 7, 9])
numbers.add(2)
numbers.remove(3)
// console.log(numbers.items)

// const objs = new Collection<Object>([{a: 322}, {b: 228}, {c: 12}])
// objs.add('!')
// objs.remove({a: 322})
// console.log(objs.items)

//========================================

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car
}

//==========================================

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.pop()

// cars[55]

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'