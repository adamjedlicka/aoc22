import { readLines } from '../utils.js'

const available = 70000000
const required = 30000000

let root = null
let current = null

for (const line of await readLines('07/input.txt')) {
  if (line === '$ cd /') {
    current = {
      parent: null,
      name: '/',
      files: {},
      directories: {},
    }

    root = current
  } else if (line === '$ cd ..') {
    current = current.parent
  } else if (line.startsWith('$ cd ')) {
    const name = line.substring(5)

    const dir = {
      parent: current,
      name,
      files: {},
      directories: {},
    }

    current.directories[name] = dir

    current = dir
  } else if (line === '$ ls') {
    // do nothing
  } else if (line.startsWith('dir ')) {
    // do nothing
  } else {
    const [size, name] = line.split(' ')

    current.files[name] = parseInt(size)
  }
}

const calculateTotalSize = (dir) => {
  let siezOfDirectFiles = 0
  let sizeOfIndirectFiles = 0

  for (const size of Object.values(dir.files)) {
    siezOfDirectFiles += size
  }

  for (const subdir of Object.values(dir.directories)) {
    sizeOfIndirectFiles += calculateTotalSize(subdir)
  }

  dir.totalSize = siezOfDirectFiles + sizeOfIndirectFiles

  return dir.totalSize
}

calculateTotalSize(root)

const free = available - root.totalSize
const toBeDeleted = required - free

let smallesSize = available + 1

const calculateAnswer = (dir) => {
  if (dir.totalSize >= toBeDeleted) {
    if (smallesSize > dir.totalSize) {
      smallesSize = dir.totalSize
    }
  }

  for (const subdir of Object.values(dir.directories)) {
    calculateAnswer(subdir)
  }
}

calculateAnswer(root)

console.log(smallesSize)
