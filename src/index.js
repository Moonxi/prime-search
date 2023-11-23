import renderDOM from './util/renderDOM.js'
import Number from './UI/Number.js'
import Center from './UI/Center.js'
import commonState from './UI/commonState.js'

const divContainer = document.getElementById('divContainer')
const divCenter = document.getElementById('divCenter')

renderDOM(divContainer, Number)
renderDOM(divCenter, Center)

let isStart = false

window.addEventListener('click', () => {
  if (isStart) {
    commonState.counter.stop()
    isStart = false
  } else {
    commonState.counter.start()
    isStart = true
  }
})
