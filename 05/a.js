import { readLines } from '../utils.js'

const lines = await readLines('05/input.txt')

const numberOfTowers = 9
let towers = []

for (const line of lines) {
  if (line.startsWith('[')) {
    const blocks = []
    for (let i = 1; i < 1 + numberOfTowers * 4; i += 4) {
      blocks.push(line.charAt(i))
    }
    towers.push(blocks)
  } else if (line.startsWith(' ')) {
    // skip
  } else if (line === '') {
    const tmp = towers
    towers = []

    for (let i = 0; i < numberOfTowers; i++) {
      const tower = []
      for (let j = tmp.length - 1; j >= 0; j--) {
        tower.push(tmp[j][i].trim())
      }
      towers.push(tower.filter((b) => !!b))
    }
  } else {
    const match = line.match(/move (\d+) from (\d) to (\d)/)

    if (!match) {
      console.error('Bad line', line)
      continue
    }

    const number = parseInt(match[1])
    const from = parseInt(match[2]) - 1
    const to = parseInt(match[3]) - 1

    for (let i = 0; i < number; i++) {
      towers[to].push(towers[from].pop())
    }
  }
}

console.log(towers)
