import { getTargetPaths } from '../eslint.restrected-files.js'

const PATHS = [
  './src/_internal',
  './src/_internal/converters',
  './src/_internal/dev-ops',
  './src/_internal/dev-ops/package-generator',
  './src/_internal/dev-ops/package-generator/generate-alias',
]

describe('getTargetPaths', () => {
  it('./src/_internal', () => {
    expect(JSON.stringify(getTargetPaths('./src/_internal', PATHS))).toBe(
      JSON.stringify(['./src/_internal/converters', './src/_internal/dev-ops'])
    )
  })
  it('./src/_internal/converters', () => {
    expect(JSON.stringify(getTargetPaths('./src/_internal/converters', PATHS))).toBe(
      JSON.stringify(['./src/_internal/dev-ops'])
    )
  })
  it('./src/_internal/dev-ops', () => {
    expect(JSON.stringify(getTargetPaths('./src/_internal/dev-ops', PATHS))).toBe(
      JSON.stringify(['./src/_internal/converters', './src/_internal/dev-ops/package-generator'])
    )
  })
  it('./src/_internal/dev-ops/package-generator', () => {
    expect(JSON.stringify(getTargetPaths('./src/_internal/dev-ops/package-generator', PATHS))).toBe(
      JSON.stringify(['./src/_internal/converters', './src/_internal/dev-ops/package-generator/generate-alias'])
    )
  })
  it('./src/_internal/dev-ops/package-generator/generate-alias', () => {
    expect(JSON.stringify(getTargetPaths('./src/_internal/dev-ops/package-generator/generate-alias', PATHS))).toBe(
      JSON.stringify(['./src/_internal/converters'])
    )
  })
})
