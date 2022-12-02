import { readLines } from '../utils.js'

const input = await readLines('01/input.txt')

const elfs = []
let elf = 0

for (const line of input) {
  if (line === '') {
    elfs.push(elf)
    elf = 0
  } else {
    elf += Number(line)
  }
}

let maxScore = 0
for (const elf of elfs) {
  if (elf > maxScore) {
    maxScore = elf
  }
}

console.log(maxScore)
