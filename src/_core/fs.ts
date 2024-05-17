import { statSync, readdirSync } from 'fs'

import { minimatch } from 'minimatch'

export interface Options {
  include: string[]
  exclude: string[]
}

export const OPTIONS = {
  include: [],
  exclude: [],
}

const isMatch = (path: string, patterns: string[]) => {
  return patterns.some(pattern => minimatch(path, pattern))
}

export const getAllFiles = (dir: string, _files: string[] = [], { include, exclude }: Options = OPTIONS) => {
  const files = readdirSync(dir)
  for (const file of files) {
    const name = dir + '/' + file
    if (isMatch(name, exclude)) {
      continue
    }
    if (statSync(name).isDirectory()) {
      getAllFiles(name, _files, { include, exclude })
    } else {
      if (include.length > 0 && !isMatch(name, include)) {
        continue
      }
      _files.push(name)
    }
  }
  return _files
}
