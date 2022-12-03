import { readLines } from '../utils.js'

const lines = await readLines('03/input.txt')

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const scores = {}

for (let i = 0; i < letters.length; i++) {
  scores[letters[i]] = i + 1
}

let totalScore = 0

let group = []

for (const line of lines) {
  group.push(line)

  if (group.length === 3) {
    let badge = null

    outer: for (const a of group[0]) {
      for (const b of group[1]) {
        for (const c of group[2]) {
          if (a === b && b === c) {
            badge = a
            break outer
          }
        }
      }
    }

    totalScore += scores[badge]
    group = []
  }
}

console.log({ totalScore })
