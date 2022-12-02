import { readLines } from '../utils.js'

const lines = await readLines('02/input.txt')

const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'

const oponentMapping = {
  A: rock,
  B: paper,
  C: scissors,
}

const playerMapping = {
  X: 2, // loose
  Y: 1, // draw
  Z: 0, // win
}

const scoreShape = {
  [rock]: 1,
  [paper]: 2,
  [scissors]: 3,
}

// format: win, draw, loose
const scoreOutcome = [6, 3, 0]

// format: loose, draw, win
// swapped from 01 because we now use the oponent as input
const rules = {
  [rock]: [paper, rock, scissors],
  [paper]: [scissors, paper, rock],
  [scissors]: [rock, scissors, paper],
}

let totalScore = 0

for (const line of lines) {
  const [left, right] = line.split(' ')

  const oponent = oponentMapping[left]
  const outcomeIndex = playerMapping[right]

  const player = rules[oponent][outcomeIndex]

  totalScore += scoreOutcome[outcomeIndex] + scoreShape[player]
}

console.log(totalScore)
