import commonState from './commonState'

const root = document.createElement('div')

commonState.counter.addEffect(current => {
  const number = document.createElement('span')
  const color = commonState.counter.color
  number.textContent = current
  number.style.color = color || '#d7dbdd'
  number.style.fontWeight = color ? 'bold' : 'normal'
  root.appendChild(number)
})

export default root
