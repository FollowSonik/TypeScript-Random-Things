const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42

const float: number = 4.2
const num: number = 3e10

const nan: number = NaN

const msg: string = 'Sup!'

const numArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const stri: string[] = ['Keepo', 'Kappa', 'Kippa']
const words: Array<string> = ['Keepo', 'Kappa', 'Kippa']

// Tuple
const contact: [string, number] = ['Sonik', 9293709]

// Any
let vari: any = 42
//...
vari = 'forsenW'
vari = null

// ====================================
function monkaS(name: string): void {
  console.log(name)
}

monkaS('monkaS')

// Never
function throwError(msg: string): never {
  throw new Error(msg)
}

function infinite(): never {
  while (true) {
  }
}

// Type
type Login = string

const login: Login = 'forsen'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type StringID = string | number
const id3: StringID = NaN

type SomeType = string | null | undefined