import commonState from './commonState'

const root = document.createElement('span')
commonState.counter.addEffect(current => {
  root.textContent = current
  const color = commonState.counter.color
  root.style.color = color || 'rgba(255, 255, 255, .7)'

  if (color) {
    const explosive = document.createElement('div')
    explosive.classList.add('center')
    explosive.innerText = current
    explosive.style.color = color
    document.body.appendChild(explosive)
    // force reflow
    explosive.clientWidth

    explosive.style.transform = `translate(${Math.random() * 100 - 50}vw, ${
      Math.random() * 100 - 50
    }vh)`
    explosive.style.opacity = 0
    explosive.addEventListener('transitionend', () => {
      explosive.remove()
    })
  }
})

export default root
