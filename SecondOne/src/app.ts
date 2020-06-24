class Person {
  constructor(private name: string) {
  }
}

const sonik = new Person('Sonik')

const btn = document.querySelector('#btn')!

btn.addEventListener('click', () => {
  console.log('PogChamp')
})

let mFucker = 'Kappa'
const mBitcher = 32

function logInfo(data: string, _?: number) {
  const msg = 'String'
  console.log(data)
  mFucker = 'Keepo'
}

logInfo('forsen double you!')

function multiple(a: number, b: number) {
  if (a && b) {
    return a * b
  }

  return
}