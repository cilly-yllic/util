import { isDeepChild } from '../eslint.restrected-files.js'

describe('isDeepChild', () => {
  it('should be deep child', () => {
    expect(isDeepChild('./src/_internal/dev-ops/package-generator/generate-alias', './src/_internal')).toBeTruthy()
  })

  it('should not be deep child', () => {
    expect(isDeepChild('./src/_internal', './src/_internal/dev-ops/package-generator/generate-alias')).toBeFalsy()
  })
})
