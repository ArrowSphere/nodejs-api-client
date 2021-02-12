import { expect } from 'chai'
import main from '../src'

describe('index', () => {
  describe('main', () => {
    it('should return "main" as a result', () => {
      expect(main()).to.equal('main')
    })
  })
})
