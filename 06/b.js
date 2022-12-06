import { readLines } from '../utils.js'

const lines = await readLines('06/input.txt')

const arr = []

let i = 0
for (const char of lines[0]) {
  arr.push(char)
  if (arr.length > 14) arr.shift()
  if (arr.length === 14) {
    if ([...new Set(arr).values()].length === 14) {
      console.log(i + 1)
      break
    }
  }
  i++
}
