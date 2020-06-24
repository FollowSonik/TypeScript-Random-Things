interface Rect {
  readonly id: string | number
  color?: string
  size: {
    width: number
    height: number
  }
}

const rectAngle: Rect = {
  id: Date.now(),
  size: {
    width: 322,
    height: 228
  },
  color: '#fff'
}

const rectAngleTwo: Rect = {
  id: Date.now() - 322,
  size: {
    width: 10,
    height: 5
  }
}

rectAngleTwo.color = '#fef'
// rectAngleTwo.id = '123213321321213321' //READONLY PROPERY!

const rectAngleThree = {} as Rect
const rectAngleFour = <Rect>{}

// ================================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rectAngleFive: RectWithArea = {
  id: Date.now(),
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ====================================

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = Object(new Date().toLocaleDateString())
  setTime(date: Date): void {
    this.time = date
  }
}

// ========================================
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}