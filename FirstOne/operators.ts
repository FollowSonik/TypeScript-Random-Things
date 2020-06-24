interface Person {
  name: String
  age: Number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserPogChamp = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserPagChomp = Pick<User, 'name' | 'email'>

let userOne: UserPogChamp = 'name'
// userOne = '_id'