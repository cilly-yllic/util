import { isParent } from '../eslint.restrected-files.js'

describe('isParent', () => {
  it('should be parent', () => {
    expect(isParent('./src/_internal', './src/_internal/dev-ops')).toBeTruthy()
  })
  it('should be grandparent', () => {
    expect(isParent('./src/_internal', './src/_internal/dev-ops/package-generator/generate-alias')).toBeTruthy()
  })

  it('should be not parent: (child)', () => {
    expect(isParent('./src/_internal/dev-ops', './src/_internal')).toBeFalsy()
  })
  it('should be not parent: (grandchild)', () => {
    expect(isParent('./src/_internal/dev-ops/package-generator/generate-alias', './src/_internal')).toBeFalsy()
  })
  it('should be not parent: (different path)', () => {
    expect(isParent('./src/hoge', './src/_internal')).toBeFalsy()
  })
})
