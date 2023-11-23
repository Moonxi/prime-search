import Counter from '../util/Counter'
import isPrime from '../util/isPrime.js'
import getColor from '../util/getColor.js'

const counter = new Counter(50)
counter.addEffect(current => {
  const isPrimeNumber = isPrime(current)
  counter.color = isPrimeNumber ? getColor(current) : null
})
export default {
  counter
}
