import { readLines } from '../utils.js'

const map = []

for (const line of await readLines('08/input.txt')) {
  map.push([...line.split('').map((v) => parseInt(v))])
}

const visibleTrees = (row, col) => {
  return (
    visibleTreesToTop(row, col) *
    visibleTreesToBottom(row, col) *
    visibleTreesToLeft(row, col) *
    visibleTreesToRight(row, col)
  )
}

const visibleTreesToTop = (row, col) => {
  const height = map[row][col]
  let maxHeight = null
  let visibleTrees = 0

  for (let i = row - 1; i >= 0; i--) {
    if (height < map[i][col]) {
      visibleTrees += 1
      break
    }

    if (height <= map[i][col] && maxHeight === null) {
      maxHeight = map[i][col]
    } else if (maxHeight !== null && map[i][col] < maxHeight) {
      break
    }

    visibleTrees += 1
  }

  return visibleTrees
}

const visibleTreesToBottom = (row, col) => {
  const height = map[row][col]
  let maxHeight = null
  let visibleTrees = 0

  for (let i = row + 1; i < map.length; i++) {
    if (height < map[i][col]) {
      visibleTrees += 1
      break
    }

    if (height <= map[i][col] && maxHeight === null) {
      maxHeight = map[i][col]
    } else if (maxHeight !== null && map[i][col] < maxHeight) {
      break
    }

    visibleTrees += 1
  }

  return visibleTrees
}

const visibleTreesToLeft = (row, col) => {
  const height = map[row][col]
  let maxHeight = null
  let visibleTrees = 0

  for (let i = col - 1; i >= 0; i--) {
    if (height < map[row][i]) {
      visibleTrees += 1
      break
    }

    if (height <= map[row][i] && maxHeight === null) {
      maxHeight = map[row][i]
    } else if (maxHeight !== null && map[row][i] < maxHeight) {
      break
    }

    visibleTrees += 1
  }

  return visibleTrees
}

const visibleTreesToRight = (row, col) => {
  const height = map[row][col]
  let maxHeight = null
  let visibleTrees = 0

  for (let i = col + 1; i < map[row].length; i++) {
    if (height < map[row][i]) {
      visibleTrees += 1
      break
    }

    if (height <= map[row][i] && maxHeight === null) {
      maxHeight = map[row][i]
    } else if (maxHeight !== null && map[row][i] < maxHeight) {
      break
    }

    visibleTrees += 1
  }

  return visibleTrees
}

let numberOfVisible = 0

visibleTrees(2, 3)

for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    const num = visibleTrees(row, col)
    if (num > numberOfVisible) {
      numberOfVisible = num
      console.log([row, col])
    }
  }
}

console.log({ numberOfVisible })
