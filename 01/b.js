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

elfs.sort((a, z) => z - a)

console.log(elfs[0] + elfs[1] + elfs[2])
