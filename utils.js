import fs from 'node:fs/promises'
import path from 'node:path'

export const readLines = async (file) => {
  const content = await fs.readFile(path.join(process.cwd(), file), { encoding: 'utf-8' })

  const lines = content.split('\n')

  if (lines[lines.length - 1] === '') {
    lines.pop()
  }

  return lines
}
