import { readLines } from '../utils.js'

const map = []

for (const line of await readLines('08/input.txt')) {
  map.push([...line.split('').map((v) => parseInt(v))])
}

const isVisible = (row, col) => {
  return (
    isVisibleFromTop(row, col) ||
    isVisibleFromBottom(row, col) ||
    isVisibleFromLeft(row, col) ||
    isVisibleFromRight(row, col)
  )
}

const isVisibleFromTop = (row, col) => {
  const height = map[row][col]

  for (let i = row - 1; i >= 0; i--) {
    if (height <= map[i][col]) return false
  }

  return true
}

const isVisibleFromBottom = (row, col) => {
  const height = map[row][col]

  for (let i = row + 1; i < map.length; i++) {
    if (height <= map[i][col]) return false
  }

  return true
}

const isVisibleFromLeft = (row, col) => {
  const height = map[row][col]

  for (let i = col - 1; i >= 0; i--) {
    if (height <= map[row][i]) return false
  }

  return true
}

const isVisibleFromRight = (row, col) => {
  const height = map[row][col]

  for (let i = col + 1; i < map[row].length; i++) {
    if (height <= map[row][i]) return false
  }

  return true
}

let numberOfVisible = 0

for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    if (isVisible(row, col)) {
      numberOfVisible += 1
    }
  }
}

console.log({ numberOfVisible })
