export default class Counter {
  constructor(duration = 500) {
    this.current = 1
    this.duration = duration
    this.timerId = null
    this.effects = []
    this.color = null
  }
  start() {
    this.timerId = setInterval(() => {
      for (const effect of this.effects) {
        effect(this.current)
      }
      this.current++
    }, this.duration)
  }
  stop() {
    clearInterval(this.timerId)
    this.timerId = null
  }
  addEffect(effect) {
    if (typeof effect !== 'function') {
      throw new Error('effect must be a function')
    }
    this.effects.push(effect)
  }
}
