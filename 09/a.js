import { readLines } from '../utils.js'

const head = { x: 0, y: 0 }
const oldHead = { x: 0, y: 0 }
const tail = { x: 0, y: 0 }

const visited = new Set()

const addToVisited = (tail) => {
  visited.add(JSON.stringify(tail))
}

addToVisited(tail)

for (const line of await readLines('09/input.txt')) {
  const [direction, _distance] = line.split(' ')
  const distance = parseInt(_distance)

  for (let i = 0; i < distance; i++) {
    if (direction === 'R') {
      head.x += 1
    } else if (direction === 'L') {
      head.x -= 1
    } else if (direction === 'U') {
      head.y -= 1
    } else if (direction === 'D') {
      head.y += 1
    } else {
      throw new Error(`Unreachable: ${line}`)
    }

    if (head.y === tail.y) {
      if (head.x > tail.x + 1) {
        tail.x += 1
      } else if (head.x < tail.x - 1) {
        tail.x -= 1
      }
    } else if (head.x === tail.x) {
      if (head.y > tail.y + 1) {
        tail.y += 1
      } else if (head.y < tail.y - 1) {
        tail.y -= 1
      }
    } else if (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1) {
      tail.x = oldHead.x
      tail.y = oldHead.y
    }

    addToVisited(tail)

    oldHead.x = head.x
    oldHead.y = head.y
  }
}

console.log(visited.size)
