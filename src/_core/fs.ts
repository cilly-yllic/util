import { statSync, readdirSync } from 'fs'

export const getAllFiles = (dir: string, _files: string[] = []) => {
  const files = readdirSync(dir)
  for (const file of files) {
    const name = dir + '/' + file
    if (statSync(name).isDirectory()) {
      getAllFiles(name, _files)
    } else {
      _files.push(name)
    }
  }
  return _files
}
