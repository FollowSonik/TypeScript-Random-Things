function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.toUpperCase().trim()
}

interface MyPosition {
  x: number | undefined
  y: void | number
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: void 0, y: void 0 }
  }

  if (a && !b) {
    return { x: a, y: void 0, default: a.toString() }
  }

  return { x: a, y: b }
}

console.log('Empty: ', position())
console.log('One param:', position(322))
console.log('Two params:', position(228, 1488))