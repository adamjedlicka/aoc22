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
  X: rock,
  Y: paper,
  Z: scissors,
}

const scoreShape = {
  [rock]: 1,
  [paper]: 2,
  [scissors]: 3,
}

// format: win, draw, loose
const scoreOutcome = [6, 3, 0]

// format: win, draw, loose
const rules = {
  [rock]: [scissors, rock, paper],
  [paper]: [rock, paper, scissors],
  [scissors]: [paper, scissors, rock],
}

let totalScore = 0

for (const line of lines) {
  const [left, right] = line.split(' ')

  const oponent = oponentMapping[left]
  const player = playerMapping[right]

  const outcomeIndex = rules[player].findIndex((val) => val === oponent)

  totalScore += scoreOutcome[outcomeIndex] + scoreShape[player]
}

console.log(totalScore)
