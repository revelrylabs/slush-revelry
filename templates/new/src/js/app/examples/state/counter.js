export const NAME = 'counter'
export const TYPE_INCREMENT = 'counter:inc'
export const TYPE_DECREMENT = 'counter:dec'

export function increment() {
  return {type: TYPE_INCREMENT}
}

export function decrement() {
  return {type: TYPE_DECREMENT}
}

export default function(counter = 0, {type}) {
  switch (type) {
  case TYPE_INCREMENT:
    return counter + 1
  case TYPE_DECREMENT:
    return counter - 1
  default:
    return counter
  }
}
