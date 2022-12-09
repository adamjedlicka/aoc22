import { readLines } from '../utils.js'

let head = null

for (let i = 9; i >= 1; i--) {
  head = { x: 0, y: 0, name: '' + i, next: head }
}

head = { x: 0, y: 0, name: 'H', next: head }

const visited = new Set()

const addToVisited = (tail) => {
  const coords = `${tail.x},${tail.y}`

  if (!visited.has(coords)) {
    visited.add(coords)
  }
}

addToVisited(head)

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

    let first = head
    let second = head.next

    while (second) {
      if (first.y === second.y) {
        if (first.x > second.x + 1) {
          second.x += 1
        } else if (first.x < second.x - 1) {
          second.x -= 1
        }
      } else if (first.x === second.x) {
        if (first.y > second.y + 1) {
          second.y += 1
        } else if (first.y < second.y - 1) {
          second.y -= 1
        }
      } else if (Math.abs(first.x - second.x) > 1 || Math.abs(first.y - second.y) > 1) {
        if (first.x > second.x && first.y < second.y) {
          second.x += 1
          second.y -= 1
        } else if (first.x > second.x && first.y > second.y) {
          second.x += 1
          second.y += 1
        } else if (first.x < second.x && first.y < second.y) {
          second.x -= 1
          second.y -= 1
        } else if (first.x < second.x && first.y > second.y) {
          second.x -= 1
          second.y += 1
        } else {
          throw new Error('Unreachable')
        }
      }

      first = second
      second = first.next

      if (second === null) addToVisited(first)
    }
  }
}

console.log(visited.size)
