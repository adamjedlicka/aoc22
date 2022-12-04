import { readLines } from '../utils.js'

const lines = await readLines('04/input.txt')

let overlaps = 0

for (const line of lines) {
  const [first, second] = line.split(',')
  const [firstFrom, firstTo] = first.split('-').map((v) => parseInt(v))
  const [secondFrom, secondTo] = second.split('-').map((v) => parseInt(v))

  if ((firstFrom <= secondFrom && firstTo >= secondTo) || (secondFrom <= firstFrom && secondTo >= firstTo)) {
    overlaps += 1
  }
}

console.log({ overlaps })
