import { readLines } from '../utils.js'

const lines = await readLines('03/input.txt')

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const scores = {}

for (let i = 0; i < letters.length; i++) {
  scores[letters[i]] = i + 1
}

let totalScore = 0

for (const line of lines) {
  const [first, second] = [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)]

  let same = null

  outer: for (const a of first) {
    for (const b of second) {
      if (a === b) {
        same = a
        break outer
      }
    }
  }

  totalScore += scores[same]
}

console.log({ totalScore })
