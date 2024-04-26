import { isFirstChild } from '../eslint.restrected-files.js'

describe('isFirstChild', () => {
  it('should be first child', () => {
    expect(isFirstChild('./src/_internal/dev-ops', './src/_internal')).toBeTruthy()
  })
  it('should not be first child: (grand child)', () => {
    expect(isFirstChild('./src/_internal/dev-ops/package-generator/generate-alias', './src/_internal')).toBeFalsy()
  })
})
